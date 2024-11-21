import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUrlData, IUrlDataResponse } from '../models/urlData.model';
import { AWS_API } from '../consts/urlConsts';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  constructor(
    private http: HttpClient
  ) {}

  generateShortenUrl(urlData: IUrlData): Observable<IUrlDataResponse> {
    return this.http.post<IUrlDataResponse>(`${AWS_API}/create`, urlData);
  }
}