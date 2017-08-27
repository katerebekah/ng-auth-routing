import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SecurityService } from './security.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
    constructor(private securityService: SecurityService){}

    canActivate(router: ActivatedRouteSnapshot, route: RouterStateSnapshot): Promise<boolean> {
        console.log(route.url);
        console.log("can activate");
        return this.securityService
            .getToken()
            .then((token) => {
                if (token){
                    return true;
                }
            })
    }

    canActivateChild(router: ActivatedRouteSnapshot, route: RouterStateSnapshot): boolean {
        console.log(route.url);
        console.log("can activate child");
        return true;
    }

    canLoad(): boolean {
        console.log("can load");
        return true;
    }
}