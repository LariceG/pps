import { Injectable }              from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as myGlobals from '../shared/globals';

@Injectable()
export class CustomerService {

  http: Http;
  returnCommentStatus:Object = [];
  token;
  constructor(public _http: Http)
  {
      this.http = _http;
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
  }

  login(value: any)
  {
    let form = {
       'useremail' : value.username,
       'password' : value.password,
       'deviceId' : value.password,
       'registerId' : value.password,
       'usertype' : 2
    }
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(myGlobals.baseUrl+'api/login/',form, { headers }).map(
          (res: Response) => res.json() || {});
  }

  myOrders(v)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.get(myGlobals.baseUrl+'api/customer-orders/'+v, { headers }).map(
          (res: Response) => res.json() || {});
  }

  orderDetails(v)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.get(myGlobals.baseUrl+'api/order-details/'+v, { headers }).map(
          (res: Response) => res.json() || {});
  }

  submiteRequest(v)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(myGlobals.baseUrl+'api/addStoreUserRequest/',v, { headers }).map(
          (res: Response) => res.json() || {});
  }

  chnagePassword(v)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/change-password/',v, { headers }).map(
          (res: Response) => res.json() || {});
  }


}
