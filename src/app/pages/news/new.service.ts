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
  /**
    * GetLatestNews is used to get all news in a list.
    * @returns Array of News as Observable
    */
  getLatestNews() {
    let URL = `${this.urlPrefix}${AppConfig.ENDPOINTS.GET_NEW_LIST}?print=pretty`
    return this.http.get(URL)
  }
  /**
    * GetNewsDetails is used to get detail of news according to the id.
    * @param id is a item id for which detail has to be fetch.
    * @returns json object which contain news details as Observable
    */
  getNewsDetails(id: any) {
    let URL = `${this.urlPrefix}${AppConfig.ENDPOINTS.GET_NEWS_DETAILS}/${id}.json?print=pretty`
    return this.http.get(URL)
  }
}
