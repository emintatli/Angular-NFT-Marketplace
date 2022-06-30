import { ApiService } from './../../../services/api.service';
import { Web3Service } from './../../../services/web3.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from 'src/app/services/translate.service';
type NFTMetadata = {
    name: string;
    description: string;
    image: string;
    pdf: string;
};
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
    uploadingEvent = false;
    nftMetaDataUrl = '';
    emptyString = '';
    buttonLoading = false;
    nftDetails = {
        image: '/assets/cover.png',
        pdf: '',
        pdfName: '',
        name: '',
        description: '',
    };
    constructor(
        private web3Service: Web3Service,
        private messageService: MessageService,
        private apiService: ApiService,
        private translateService:TranslateService
    ) {}

    async ngOnInit() {
      await this.web3Service.walletConnect();
    }
    onBasicUpload(event: any) {
        this.uploadingEvent = false;
        if (event.files[0].type === 'application/pdf') {
            this.nftDetails.pdf = event.originalEvent.body.url;
            this.nftDetails.pdfName = event.files[0].name;
        } else if (event.files[0].type === 'image/png' || event.files[0].type === 'image/jpeg') {
            this.nftDetails.image = event.originalEvent.body.url;
        }
    }
    uploading(event: any) {
        this.uploadingEvent = true;
    }
    async createNFT() {
        this.buttonLoading = true;
        const nftMetadata: NFTMetadata = {
            name: this.nftDetails.name,
            description: this.nftDetails.description,
            image: this.nftDetails.image,
            pdf: this.nftDetails.pdf,
        };

        this.apiService.createJsonOnIpfs(nftMetadata).subscribe(async (data: any) => {
            if (data.status === 'succeed') {
                const nftMintStatus = await this.web3Service.createNFT(data.url);
                if (nftMintStatus) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: this.translateService.translate('nft_minted'),
                    });
                    this.buttonLoading = false;
                } else {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translateService.translate('nft_failed') });
                    this.buttonLoading = false;
                }
            } else {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translateService.translate('general_err') });
                this.buttonLoading = false;
            }
        });
    }
}
