import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Observable, Subject } from 'rxjs';
import { AbiItem } from 'web3-utils';
@Injectable({
    providedIn: 'root',
})
export class Web3Service {
    address: any;
    provider: any;
    web3: any;
    nftContract: any;
    marketplaceContract: any;
    loading: boolean = false;
    nftContractAbi: AbiItem[] = [
        {
            inputs: [{ internalType: 'string', name: 'tokenURI', type: 'string' }],
            name: 'mintToken',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getTokensOwnedByMe',
            outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getTokensCreatedByMe',
            outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'tokenURI',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ];

    marketplaceContractAbi: AbiItem[] = [
        {
            inputs: [],
            name: 'fetchAvailableMarketItems',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'marketItemId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address',
                            name: 'nftContractAddress',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'tokenId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address payable',
                            name: 'creator',
                            type: 'address',
                        },
                        {
                            internalType: 'address payable',
                            name: 'seller',
                            type: 'address',
                        },
                        {
                            internalType: 'address payable',
                            name: 'owner',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                        },
                        { internalType: 'bool', name: 'sold', type: 'bool' },
                        {
                            internalType: 'bool',
                            name: 'canceled',
                            type: 'bool',
                        },
                    ],
                    internalType: 'struct Marketplace.MarketItem[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'fetchSellingMarketItems',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'marketItemId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address',
                            name: 'nftContractAddress',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'tokenId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address payable',
                            name: 'creator',
                            type: 'address',
                        },
                        {
                            internalType: 'address payable',
                            name: 'seller',
                            type: 'address',
                        },
                        {
                            internalType: 'address payable',
                            name: 'owner',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                        },
                        { internalType: 'bool', name: 'sold', type: 'bool' },
                        {
                            internalType: 'bool',
                            name: 'canceled',
                            type: 'bool',
                        },
                    ],
                    internalType: 'struct Marketplace.MarketItem[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'nftContractAddress',
                    type: 'address',
                },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'uint256', name: 'price', type: 'uint256' },
            ],
            name: 'createMarketItem',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getListingFee',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'nftContractAddress',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'marketItemId',
                    type: 'uint256',
                },
            ],
            name: 'cancelMarketItem',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'getLatestMarketItemByTokenId',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'marketItemId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address',
                            name: 'nftContractAddress',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'tokenId',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address payable',
                            name: 'creator',
                            type: 'address',
                        },
                        {
                            internalType: 'address payable',
                            name: 'seller',
                            type: 'address',
                        },
                        {
                            internalType: 'address payable',
                            name: 'owner',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'price',
                            type: 'uint256',
                        },
                        { internalType: 'bool', name: 'sold', type: 'bool' },
                        {
                            internalType: 'bool',
                            name: 'canceled',
                            type: 'bool',
                        },
                    ],
                    internalType: 'struct Marketplace.MarketItem',
                    name: '',
                    type: 'tuple',
                },
                { internalType: 'bool', name: '', type: 'bool' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'nftContractAddress',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'marketItemId',
                    type: 'uint256',
                },
            ],
            name: 'createMarketSale',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
    ];
    nftContractAddress = '0x32E320b4961AFF689273Bc87727B2067f5142bDE';
    marketplaceContractAddress = '0x7b7eEa90E9804C57073e50CF1A97F3EF2fC16a57';
    loadingVisibilityChange: Subject<boolean> = new Subject<boolean>();
    currentChange: Subject<object> = new Subject<object>();
    current: any;
    pinataGateway = 'booknft0.mypinata.cloud';
    constructor(private apiService: ApiService) {
        this.loadingVisibilityChange.subscribe(value => {
            this.loading = value;
        });
        this.currentChange.subscribe(value => {
            this.current = value;
        });
    }

    async walletConnect() {
        this.loadingVisibilityChange.next(true);
        try {
            this.address = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            this.provider = window.ethereum;
            this.web3 = new Web3(this.provider);
            this.nftContract = new this.web3.eth.Contract(this.nftContractAbi, this.nftContractAddress);
            this.marketplaceContract = new this.web3.eth.Contract(
                this.marketplaceContractAbi,
                this.marketplaceContractAddress
            );
            this.currentChange.next({
                address: this.address[0],
                provider: this.provider,
                web3: this.web3,
                nftContract: this.nftContract,
                marketplaceContract: this.marketplaceContract,
            });
        } catch (err) {
        } finally {
            this.loadingVisibilityChange.next(false);
        }
        return {
            address: this.address,
            provider: this.provider,
            web3: this.web3,
            nftContract: this.nftContract,
            marketplaceContract: this.marketplaceContract,
        };
    }

    initWithoutLogin() {
        this.provider = window.ethereum;
        this.web3 = new Web3(this.provider);
        this.nftContract = new this.web3.eth.Contract(this.nftContractAbi, this.nftContractAddress);
        this.marketplaceContract = new this.web3.eth.Contract(
            this.marketplaceContractAbi,
            this.marketplaceContractAddress
        );
        this.currentChange.next({
            provider: this.provider,
            web3: this.web3,
            nftContract: this.nftContract,
            marketplaceContract: this.marketplaceContract,
        });
    }

    async getMarketDetails(tokenId: any) {
        const data = await this.current.marketplaceContract.methods
            .getLatestMarketItemByTokenId(tokenId)
            .call({ from: this.current.address });
        return {
            marketItemId: data[0].marketItemId,
            price: data[0].price,
            seller: data[0].seller,
        };
    }

    async removeNFT(id: string) {
        await this.current.marketplaceContract.methods
            .cancelMarketItem(this.nftContractAddress, (await this.getMarketDetails(id)).marketItemId)
            .send({ from: this.current.address });
    }
    async createNFT(metadataUrl: string) {
        try {
            await this.current.nftContract.methods.mintToken(metadataUrl).send({ from: this.current.address });
            return true;
        } catch (err) {
            return false;
        }
    }
    async getListingFee() {
        return await this.current.marketplaceContract.methods.getListingFee().call({ from: this.current.address });
    }
    async addListNFT(id: any, price: any) {
        await this.current.nftContract.methods
            .approve(this.marketplaceContractAddress, id)
            .send({ from: this.current.address });
        const weiPrice = Web3.utils.toWei(price.toString(), 'ether');
        await this.current.marketplaceContract.methods
            .createMarketItem(this.nftContractAddress, id, weiPrice)
            .send({ from: this.current.address, value: await this.getListingFee() });
    }
    async getTokensOwnedByMe() {
        return await this.current.nftContract.methods.getTokensOwnedByMe().call({ from: this.current.address });
    }
    async getTokensCreatedByMe() {
        return await this.current.nftContract.methods.getTokensCreatedByMe().call({ from: this.current.address });
    }
    async fetchAvailableMarketItems() {
        return await this.current.marketplaceContract.methods
            .fetchAvailableMarketItems()
            .call({ from: this.current.address });
    }
    async getTokenURI(ids: Array<Number>) {
        let urls = [];
        for (let i = 0; i < ids.length; i++) {
            const _url = await this.current.nftContract.methods.tokenURI(ids[i]).call({ from: this.current.address });
            urls.push(_url);
        }
        return urls;
    }
    async fetchSellingMarketItems() {
        const data = await this.current.marketplaceContract.methods
            .fetchSellingMarketItems()
            .call({ from: this.current.address });
        return data.filter((val: any) => !val.canceled && !val.sold);
    }
    async createMarketSale(marketItemId: any, price: any) {
        await this.walletConnect();
        await this.current.marketplaceContract.methods
            .createMarketSale(this.nftContractAddress, marketItemId)
            .send({ from: this.current.address, value: price });
    }

    getIPFSData(ipfsUrls: Array<string>, idList: any): Observable<any> {
        return new Observable((observer: any) => {
            for (let i = 0; i <= ipfsUrls.length; i++) {
                if (ipfsUrls[i] && ipfsUrls[i].toString().includes(this.pinataGateway)) {
                    this.apiService.fetchIPFSurl(ipfsUrls[i]).subscribe(data => {
                        observer.next({ ...data, nftId: idList[i] });
                    });
                }
            }
        });
    }
}
