import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

import { ConfigService } from './config.service';
import { Config } from './config';
import { Token } from './token';

import { ListItem } from '../list/listitem';


@Injectable()
export class SecurityService {
    constructor(private http: Http, private configService: ConfigService){}

    token: Token;
    config: Config;
    url: string;

    loadUrl(): Promise<Token>{
        console.log("calling loadURL");
        return this.configService
            .getConfig()
            .then((config) => {
                this.config = config;
                return this.http.get('./../' + this.config.url  + '.json')
                    .toPromise()
                    .then((token) => {
                        this.token = token.json();
                        this.url = this.config.url + this.token.token;
                        console.log("the url is " + this.url);
                        return this.token;
                    })
            });
    }

    getList() : Promise<Array<ListItem>> {
        console.log("getting List for home page");
        return this.http.get('./../' + this.url + '.json')
            .toPromise()
            .then((list) => {
                return list.json().list;
            });
    }
}

export function securityFactory(securityService: SecurityService) {
  return () => {
    return securityService.loadUrl();
  };
}