import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBannerList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}2c9281eddfb0e4be229b`);
  }
}
