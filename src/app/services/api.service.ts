import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
type NFTMetadata={
  name:string,
  description:string,
  image:string,
  pdf:string
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient:HttpClient) { }

  createJsonOnIpfs(metadata:NFTMetadata): Observable<any> {
    return this.httpClient.post<any>('BE_API_URL_HERE/json',metadata);
  }

  fetchIPFSurl(ipfsUrl:string): Observable<any> {
    return this.httpClient.get<any>(ipfsUrl);
  }

}
