import { PaginateService } from './../../services/paginate.service';
import { Web3Service } from './../../services/web3.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    constructor(private web3Service: Web3Service, private paginateService: PaginateService) {}
    current: any;
    NFTurls: any;
    TokensOwnedByMe: any;
    nftList: any[] = [];
    limit: number = 20;
    validNftCount: number = 0;
    ngOnInit(): void {
        this.web3Service.initWithoutLogin();
        setTimeout(() => {
            this.initData();
        }, 100);
    }

    async initData() {
        this.TokensOwnedByMe = await this.web3Service.fetchAvailableMarketItems();
        this.TokensOwnedByMe = this.TokensOwnedByMe.map((val: any) => val.tokenId);
        this.NFTurls = await this.web3Service.getTokenURI(this.TokensOwnedByMe);
        this.validNftCount = this.paginateService.searchValidOnes(this.NFTurls).length;
        this.paginate(1, this.limit);
    }
    paginate2(event: any) {
        this.paginate(event.page + 1, event.rows);
    }

    paginate(page: number, limit: number) {
        this.nftList = [];
        this.paginateService.getDetailsAndshowPaginate(this.NFTurls, page, limit, this.TokensOwnedByMe).subscribe((data: any) => {
            this.nftList.push(data);
        });
    }
}
