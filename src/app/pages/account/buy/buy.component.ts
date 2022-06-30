import { ApiService } from './../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Web3Service } from './../../../services/web3.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
    urlSubs: any;
    nftMarketDetails: any;
    nftDetails: any;
    nftId: any;
    constructor(private web3Service: Web3Service, private route: ActivatedRoute, private apiService: ApiService) {}

    async ngOnInit() {
        this.web3Service.initWithoutLogin();
        this.urlSubs = this.route.params.subscribe((params: any) => {
            this.nftId = params.id;
        });
        this.nftMarketDetails = await this.web3Service.getMarketDetails(this.nftId);
        this.apiService.fetchIPFSurl((await this.web3Service.getTokenURI([this.nftId]))[0]).subscribe((data: any) => {
            this.nftDetails = data;
        });

    }
    async initBuy(marketItemId:any,price:any){
      await this.web3Service.createMarketSale(marketItemId,price);


    }

    ngOnDestroy() {
        this.urlSubs.unsubscribe();
    }
}
