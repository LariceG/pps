import { Injectable }              from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as myGlobals from '../shared/globals';

@Injectable()
export class FrontendService {
  http: Http;
  returnCommentStatus:Object = [];
  token;
  constructor(public _http: Http)
  {
      this.http = _http;
  }


  getCats()
  {
    let headers = new Headers();
    return this.http.get(myGlobals.baseUrl+'api/get-cat/',{headers}).map(
          (res: Response) => res.json() || {});
  }

  getCatsData()
  {
    let headers = new Headers();
    return this.http.get(myGlobals.baseUrl+'api/getCatsdata/',{headers}).map(
          (res: Response) => res.json() || {});
  }

  getWhere(id,type)
  {
    let headers = new Headers();
    return this.http.get(myGlobals.baseUrl+'api/get-where/id/'+id+'/type/'+type,{headers}).map(
          (res: Response) => res.json() || {});
  }


  getProducts(v)
  {
    // console.log(v);
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    // headers.append('ApiKey','w8844ssw4sgo8oogkscw0csws4cwo8cs004ock0s');
    return this.http.post(myGlobals.baseUrl+'api/productListing/',v,{headers}).map(
          (res: Response) => res.json() || {});
  }

  addToCart(v)
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
    }
    // console.log(v);
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/addProductAddToCart/',v,{headers}).map(
          (res: Response) => res.json() || {});
  }

  productDetails(id)
  {
    let headers = new Headers();
    // headers.append('ApiKey','w8844ssw4sgo8oogkscw0csws4cwo8cs004ock0s');
    return this.http.get(myGlobals.baseUrl+'api/getProductDetail/'+id,{headers}).map(
          (res: Response) => res.json() || {});
  }

  getCartDetails(uid)
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
    }
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.get(myGlobals.baseUrl+'api/getAllProductFromAddToCart/'+uid,{headers}).map(
          (res: Response) => res.json() || {});
  }

  updateCart(v)
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
    }
    // console.log(v);
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/updateAddToCartProductQty/',v,{headers}).map(
          (res: Response) => res.json() || {});
  }

  SaveMyOrders(v)
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
    }
    // console.log(v);
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/userStoreSaveMyOrders/',v,{headers}).map(
          (res: Response) => res.json() || {});
  }

  delete(id,type)
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
      let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append('ApiKey',this.token['apiKey'])
      return this.http.delete(myGlobals.baseUrl+'api/delete/id/'+id+'/type/'+type, { headers }).map(
            (res: Response) => res.json() || {});
      }
  }



}
