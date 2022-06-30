import { PaginateService } from './../../../services/paginate.service';
import { Router } from '@angular/router';
import { Web3Service } from './../../../services/web3.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from 'src/app/services/translate.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    current: any;
    NFTurls: any;
    tabState: string = 'wallet';
    TokensOwnedByMe: any;
    nftList: any[] = [];
    limit: number = 20;
    sellingItems: any;
    sellingItemsNFTurls: any;
    sellingNFTList: any[] = [];
    validNftCount: number = 0;
    tabItems: MenuItem[] = [
        {
            label: this.translationService.translate('wallet'),
            icon: 'pi pi-fw pi-wallet',
            command: () => {
                this.tabState = 'wallet';
            },
        },
        {
            label: this.translationService.translate('sale'),
            icon: 'pi pi-fw pi-shopping-cart',
            command: () => {
                this.tabState = 'market';
            },
        },
    ];
    items: MenuItem[] = [
        {
            label: this.translationService.translate('profile'),
            items: [
                {
                    label: this.translationService.translate('my_nfts'),
                    command: () => {
                        this.router.navigate(['account/dashboard']);
                    },
                },
            ],
        },
        {
            label: 'NFT',
            icon: 'pi pi-images',
            items: [
                {
                    label: this.translationService.translate('create'),
                    icon: 'pi pi-plus-circle',
                    command: () => {
                        this.router.navigate(['account/create']);
                    },
                },
                {
                    label: this.translationService.translate('buy'),
                    icon: 'pi pi-shopping-cart',
                    command: () => {
                        this.router.navigate(['/']);
                    },
                },
            ],
        },
    ];
    constructor(public web3Service: Web3Service, private router: Router, private paginateService: PaginateService,private translationService:TranslateService) {}

    async ngOnInit() {
        await this.web3Service.walletConnect();
        this.web3Service.currentChange.subscribe(value => {
            this.current = value;
        });
        setTimeout(() => {
            this.initData();
        }, 100);
    }

    async initData() {
        this.TokensOwnedByMe = await this.web3Service.getTokensOwnedByMe();
        this.sellingItems = await this.web3Service.fetchSellingMarketItems();
        this.sellingItems = this.sellingItems.map((val: any) => val.tokenId);
        this.sellingItemsNFTurls = await this.web3Service.getTokenURI(this.sellingItems);
        this.NFTurls = await this.web3Service.getTokenURI(this.TokensOwnedByMe);

        this.validNftCount = this.paginateService.searchValidOnes(this.NFTurls).length;
        this.paginate(1, this.limit,this.TokensOwnedByMe);
        this.paginateSelling(1, this.limit,this.sellingItems);
    }
    paginate2(event: any) {
        this.paginate(event.page + 1, event.rows,this.TokensOwnedByMe);
    }
    paginate2market(event: any) {
      this.paginateSelling(event.page + 1, event.rows,this.sellingItems);
  }
    paginate(page: number, limit: number,idList:any) {
        this.nftList = [];
        this.paginateService.getDetailsAndshowPaginate(this.NFTurls, page, limit,idList).subscribe((data: any) => {
            this.nftList.push(data);
        });
    }

    paginateSelling(page: number, limit: number,idList:any) {
        this.nftList = [];
        this.paginateService.getDetailsAndshowPaginate(this.sellingItemsNFTurls, page, limit,idList).subscribe((data: any) => {
            this.sellingNFTList.push(data);
        });
    }
}
