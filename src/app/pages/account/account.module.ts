import { NftCardModule } from './../../shared/nft-card/nft-card.module';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './../../pipes/shorten.pipe';
import { AccountRoutingModule } from './account.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { BuyComponent } from './buy/buy.component';
import { AccountComponent } from './account.component';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import { QRCodeModule } from 'angularx-qrcode';
import { ButtonModule } from 'primeng/button';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitterModule} from 'primeng/splitter';
import {ImageModule} from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {PaginatorModule} from 'primeng/paginator';
import {TabMenuModule} from 'primeng/tabmenu';
import {TooltipModule} from 'primeng/tooltip';
import { TranslateModule } from 'src/app/pipes/translate.module';
@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent,
    BuyComponent,
    AccountComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MenuModule,
    CardModule,
    QRCodeModule,
    ButtonModule,
    ConfirmPopupModule,
    ToolbarModule,
    SplitterModule,
    ImageModule,
    InputTextModule,
    FileUploadModule,
    FormsModule,
    ToastModule,
    NftCardModule,
    PaginatorModule,
    TabMenuModule,
    TooltipModule,
    TranslateModule
  ]
})
export class AccountModule { }
