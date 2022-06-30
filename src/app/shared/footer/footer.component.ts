import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
    selectedCity2: any;
    currentLang = 'en';
    constructor(private translateService: TranslateService) {}
    countries = [
        {
            name: 'English',
            code: 'en',
        },
        {
            name: 'Türkçe',
            code: 'tr',
        },
    ];
    ngOnInit(): void {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.changeLang(this.currentLang)
    }
    changeLang(value: any,refresh:boolean = false) {
        localStorage.setItem('lang', value);
        this.translateService.changeLang(value);
        refresh&&window.location.reload();
    }
}
