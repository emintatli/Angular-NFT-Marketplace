
import { NftCardModule } from './shared/nft-card/nft-card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ToolbarModule} from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {HttpClientModule} from '@angular/common/http';
import { TranslateService } from './services/translate.service';
import { TranslateModule } from './pipes/translate.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ConfirmPopupModule,
    HttpClientModule,
    NftCardModule,
    TranslateModule
  ],
  providers: [ConfirmationService,MessageService,TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
