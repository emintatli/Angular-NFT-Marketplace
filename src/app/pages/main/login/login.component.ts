import { Router } from '@angular/router';
import { Web3Service } from './../../../services/web3.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loading: boolean = false;
    constructor(private web3Service: Web3Service, private router: Router) {}

    async ngOnInit() {
        this.web3Service.loadingVisibilityChange.subscribe((val: any) => {
            this.loading = val;
        });
        await this.web3Service.walletConnect();
        this.web3Service.address && this.router.navigate(['account/dashboard']);
    }
    ngOnDestroy() {}
    async triggerLogin() {
        await this.web3Service.walletConnect();
        this.web3Service.address && this.router.navigate(['account/dashboard']);
    }
}
