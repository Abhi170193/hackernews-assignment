import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { AppConfig } from 'src/app/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  urlPrefix = environment.endpoints;

  constructor(private http: HttpClient) {
  }

  getLatestNews() {
    let URL = `${this.urlPrefix}${AppConfig.ENDPOINTS.GET_NEW_LIST}?print=pretty`
    return this.http.get(URL)
  }

  getNewsDetails(id: any) {
    let URL = `${this.urlPrefix}${AppConfig.ENDPOINTS.GET_NEWS_DETAILS}/${id}.json?print=pretty`
    return this.http.get(URL)
  }
}
