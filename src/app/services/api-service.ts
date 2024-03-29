
import {Injectable, ViewChild, EventEmitter, ElementRef} from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// import {UploaderComponent} from "./uploader/uploader.component";


@Injectable()
export class ApiService {

    public loginurl = environment['loginurl'];
    public api_url = environment["api_url"];
    public url = environment["url"];
    public fileurl = environment["fileurl"];
    public videofileupload = environment["videofileupload"];
    public imagefileupload = environment["imagefileupload"];
    public jwttoken: any;



    constructor(private _http: HttpClient,
                private _authHttp: HttpClient,
                public cookieService: CookieService
                // public jwtHelper: JwtHelperService,
                // private loggedinService: LoggedinService
    ) {
        this.jwttoken=this.cookieService.get('jwttoken');
    }


    isTokenExpired() {

        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)



    }
    postUploadFunction(upload_data:any,path:any){
        console.log('upload_data');
        console.log(upload_data);
        var result = this._http.post('http://3.15.236.141:5005/uploads?path='+path+'&prefix=profile',upload_data).pipe(map(res => res));
        return result;
    }

    getclientip() {

        console.log('endpoint');

        // this.isTokenExpired()
        var result = this._http.get("https://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));

        return result;
    }

    getDatawithouttoken(endpoint) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        /* console.log('httpOptions');
         console.log(httpOptions);*/
        // this.isTokenExpired()
        var result = this._http.get(this.api_url + endpoint, httpOptions).pipe(map(res => res));
        return result;
    }
    getJsonObject(path:any){
        var result = this._http.get(path).pipe(map(res => res));
        return result;
    }

    
    getEndpoint(endpoint: any) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        let condition:any=endpoint.condition;
        console.log('condition');
        console.log(condition);
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));

        // this.isTokenExpired()
        var result = this._http.post(this.api_url + endpoint.source, condition, httpOptions).pipe(map(res => res));
        console.log(result);
        return result;
    }


    getData(endpoint: any) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('id'));
        console.log(this.cookieService.get('id'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        console.log('httpOptions');
        console.log(httpOptions);

        // this.isTokenExpired()
        var result = this._http.post(this.api_url + 'datalist', endpoint, httpOptions).pipe(map(res => res));

        return result;
    }
    // getData end


    postData(endpoint:any, data) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
        return result;
    }
    postDatawithoutToken(endpoint:any, data) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        // console.log('endpoint');
        // console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
        return result;
    }

    postlogin(endpoint:any, data) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
        return result;
    } // postData end

    getState() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })
        };
        var result = this._http.get('assets/data/state.json').pipe(map(res => res));
        return result;
    }

    private getEndpointUrl(endpoint: string) {
        return this.api_url + endpoint;
    }
}
