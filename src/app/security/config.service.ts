import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

import { Config } from './config';

@Injectable()
export class ConfigService {
    constructor(private http: Http){}
    
    config: Config;

    getConfig(): Promise<Config> {
        return this.http.get("../config.json")
            .toPromise()
            .then((config) => {
                this.config = config.json();
                return this.config;
            });
    }
}