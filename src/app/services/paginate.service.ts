import { Observable } from 'rxjs';
import { Web3Service } from './web3.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PaginateService {
    constructor(private web3Service: Web3Service) {}

    getDetailsAndshowPaginate(NFTurls: any, page: number = 1, limit: number = 20, idList: any): Observable<any> {
        let filteredIdList: string[] = [];
        let filteredNFTList: string[] = [];
        for (let i = 0; i < NFTurls.length; i++) {
            if (NFTurls[i].toString().includes(this.web3Service.pinataGateway)) {
                filteredNFTList.push(NFTurls[i]);
                filteredIdList.push(idList[i]);
            }
        }
        const groups = filteredNFTList
            .map((e: any, i: any) => {
                return i % limit === 0 ? filteredNFTList.slice(i, i + limit) : null;
            })
            .filter((e: any) => {
                return e;
            });
        return new Observable((observer: any) => {
            if (groups[page - 1]) {
                this.web3Service.getIPFSData(groups[page - 1] as string[], filteredIdList).subscribe(data => {
                    observer.next(data);
                });
            } else {
                observer.error('No data found');
            }
        });
    }
    searchValidOnes(NFTurls: any[]) {
        return NFTurls.filter((val: any) => val.toString().includes(this.web3Service.pinataGateway));
    }
}
