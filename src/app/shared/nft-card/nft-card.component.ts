
import { Web3Service } from './../../services/web3.service';
import { ConfirmationService } from 'primeng/api';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';
type NFTList ={
  id:string|number,
  image:string,
  desc:string,
  mainTitle:string,
  subTitle:string,
  pdf:string,
  price:string,
  nftId:number|string
}[];
type NFTListType="mainpage"|"userpage"|"sellingpage";
@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.css']
})

export class NftCardComponent implements OnInit {
  @Input() nftList:NFTList=[{
    id:0,
    image:'',
    desc:'',
    mainTitle:"",
    subTitle:"",
    pdf:"",
    price:"",
    nftId:0
  }];
  nftSalePrice=0;
  @Input() type:NFTListType="mainpage"
  constructor(private confirmationService:ConfirmationService,private web3Service:Web3Service,private translateService:TranslateService) { }

  ngOnInit(): void {
  }
  async confirmDelete(id:any) {
    await this.web3Service.removeNFT(id);
    window.location.reload();
  }

  confirmSale(event: Event,id:any) {
    this.confirmationService.confirm({
        message: this.translateService.translate('wanttoSell'),
        icon: 'pi pi-exclamation-triangle',
        acceptButtonStyleClass:"p-button-success",
        accept: async() => {
           await this.web3Service.addListNFT(id,this.nftSalePrice);
           window.location.reload();
        },
        reject: () => {

        }
    });
  }

}
