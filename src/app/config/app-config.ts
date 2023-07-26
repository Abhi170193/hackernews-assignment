import { Injectable } from '@angular/core';
import { IAppConfig } from '../models/app-config.model';

@Injectable({
    providedIn: 'root'
})

export class AppConfig {
    /**
     * API ENDPOINTS
     */
    public static ENDPOINTS: IAppConfig = {
        GET_NEW_LIST: '/newstories.json',
        GET_NEWS_DETAILS: '/item'
    }

}