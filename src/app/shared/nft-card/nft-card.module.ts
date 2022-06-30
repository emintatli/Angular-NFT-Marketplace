import { TranslateModule } from 'src/app/pipes/translate.module';
import { NftCardComponent } from './nft-card.component';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { QRCodeModule } from 'angularx-qrcode';
import { SplitterModule } from 'primeng/splitter';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [NftCardComponent],
  imports: [
    ButtonModule,
    CommonModule,
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
    ProgressSpinnerModule,
    ConfirmDialogModule,
    TranslateModule
  ],
  exports: [
    NftCardComponent,
  ]
})
export class NftCardModule { }
