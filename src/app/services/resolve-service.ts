/*
 export class Resolve {
 }
 */
import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api-service';
import { CookieService } from 'ngx-cookie-service';

export interface EndpointComponent {
    endpoint: string;
}

@Injectable()
export class Resolveservice implements Resolve<EndpointComponent> {

    constructor(private _apiService: ApiService, private router: Router, private cookieService: CookieService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

console.log('resolve data');
let endpoint: any = route.data;
let condition: any = {};
console.log(endpoint.condition);
if (endpoint.condition != '_id' && endpoint.condition != null) {
    for (let i in endpoint.condition) {
        if (i == '_id') {
            endpoint.condition[i] = route.params.id;
            console.log('route.params.id');
            console.log(route.params.id);
        }
    }
}

        return new Promise((resolve) => {
           
                console.log('route.data --  in resolve ');
                console.log(route.data);
                console.log(route.params);
                if(route.data.condition!=null && route.data.condition.myid !=null && route.data.condition.myid=='id')
                    route.data.condition._id=this.cookieService.get('id');
                this._apiService.getEndpoint(route.data).subscribe(api_object => {
                    console.log('api_object  !!!!');
                    console.log(api_object);
                    if (api_object) {
                        return resolve(api_object);
                    } else { // id not found
                        this.router.navigateByUrl('login');
                        return true;
                    }
                });
            
        });
    }
}
