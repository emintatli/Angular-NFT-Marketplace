import { NftCardModule } from './../../shared/nft-card/nft-card.module';
import { ButtonModule } from 'primeng/button';
import { MainRoutingModule } from './main.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';
import {PaginatorModule} from 'primeng/paginator';
import { TranslateModule } from 'src/app/pipes/translate.module';



@NgModule({
  declarations: [
    MainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ButtonModule,
    NftCardModule,
    PaginatorModule,
    TranslateModule
  ]
})
export class MainModule { }
