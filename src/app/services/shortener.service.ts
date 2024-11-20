import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUrlData, IUrlDataResponse } from '../models/urlData.model';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  constructor(
    private http: HttpClient
  ) {}

  generateShortenUrl(urlData: any): Observable<IUrlDataResponse> {
    return this.http.post<IUrlDataResponse>('https://zx9hxosuol.execute-api.us-east-1.amazonaws.com/create', urlData)
  }
}
