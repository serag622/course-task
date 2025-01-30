import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBannerList(): Observable<{ banners: Banner[] }> {
    return this.http.get<{ banners: Banner[] }>(
      `${this.baseUrl}2c9281eddfb0e4be229b`
    );
  }
}
