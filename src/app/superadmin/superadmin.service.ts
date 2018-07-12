import { Injectable }              from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as myGlobals from '../shared/globals';

@Injectable()
export class SuperadminService {

  http: Http;
  returnCommentStatus:Object = [];
  token;
  constructor(public _http: Http)
  {
      this.http = _http;
      let tkn = localStorage.getItem('ppsSuperAdminToken');
      this.token = JSON.parse(tkn);
  }

  login(value: any)
  {
    let form = {
       'useremail' : value.username,
       'password' : value.password,
       'deviceId' : value.password,
       'registerId' : value.password,
       'usertype' : 1,
    }
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(myGlobals.baseUrl+'api/login/',form, { headers }).map(
          (res: Response) => res.json() || {});
  }

  addStore(value)
  {
    console.log('in serv');
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/addStoreUser/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  listStores(value)
  {
    if(value['text'] == '')
    {
      value['text'] = 'all';
    }
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.get(myGlobals.baseUrl+'api/storeUserListing/page/'+value['page']+'/perpage/'+value['perpage']+'/text/'+value['text'], { headers }).map(
          (res: Response) => res.json() || {});
  }

  storeDetail(value)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.get(myGlobals.baseUrl+'api/storeDetails/storeid/'+value,{headers}).map(
          (res: Response) => res.json() || {});
  }

  updateStore(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/updateStoreUserDetail/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  deleteStore(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.put(myGlobals.baseUrl+'api/activeUserStatus/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  insert(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/insert/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  delete(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.delete(myGlobals.baseUrl+'api/delete/id/'+value['id']+'/type/'+value['type'], { headers }).map(
          (res: Response) => res.json() || {});
  }

  update(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/update/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  getWhere(type,id)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/get-where/type/'+type+'/id/'+id,{headers}).map(
          (res: Response) => res.json() || {});
  }

  upload(fileToUpload: any)
  {
    let input 	= new FormData();
    let headers = new Headers();
    input.append("file", fileToUpload);
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/upload-image/',input, { headers }).map((res: Response) => res.json() || {});
  }

  submitCat(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/submit-cat/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  getCats()
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/get-cat/',{headers}).map(
          (res: Response) => res.json() || {});
  }


  submitProduct(v)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/submit-product/',v, { headers }).map(
          (res: Response) => res.json() || {});
  }

  getProducts(v)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/productListing/',v,{headers}).map(
          (res: Response) => res.json() || {});
  }

  productDetails(id)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/getProductDetail/'+id,{headers}).map(
          (res: Response) => res.json() || {});
  }

  submitapdmForm(v)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/addApdmUser/',v, { headers }).map(
          (res: Response) => res.json() || {});
  }

  apdmUserListing(page,type,perpage,searchText)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/apdmUserListing/'+page+'/'+perpage+'/'+type+'/'+searchText  ,{headers}).map(
          (res: Response) => res.json() || {});
  }

  apdmDetails(id,ApdmType)
  {
    if(ApdmType == 9)
    var url  = myGlobals.baseUrl+'api/exaplDetails/';
    else
    var url  = myGlobals.baseUrl+'api/apdmDetails/';
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(url+id,{headers}).map(
          (res: Response) => res.json() || {});
  }

  updateApdmUserDetail(v)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/updateApdmUserDetail/',v, { headers }).map(
          (res: Response) => res.json() || {});
  }

  getAssignes(apdm)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/getAssignes/'+apdm,{headers}).map(
          (res: Response) => res.json() || {});
  }

  getExAplAssignes(apl)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/getExAplAssignes/'+apl,{headers}).map(
          (res: Response) => res.json() || {});
  }

  sysAccessReq()
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/sysAccessReq/',{headers}).map(
          (res: Response) => res.json() || {});
  }

  enableStoreUserRequest(st,id)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/enableStoreUserRequest/'+id+'/'+st,{headers}).map(
          (res: Response) => res.json() || {});
  }

  submitAdmin(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/addAdminData/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  ListAdmin(page,perpage)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/adminUserListing/'+page+'/'+perpage,{headers}).map(
          (res: Response) => res.json() || {});
  }

  getAdminDetails(admin)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(myGlobals.baseUrl+'api/getAdminDetails/'+admin,{headers}).map(
          (res: Response) => res.json() || {});
  }

  updateAdmin(value)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.post(myGlobals.baseUrl+'api/updateAdminDetail/',value, { headers }).map(
          (res: Response) => res.json() || {});
  }

  getPortalOrders(type,id,text,page,perpage)
  {
    if(id == '')
    var url  = myGlobals.baseUrl+'api/get-portal-orders/'+page+'/'+perpage+'/'+type+'/'+text;
    else
    var url  = myGlobals.baseUrl+'api/get-portal-orders/'+page+'/'+perpage+'/'+type+'/'+id+'/'+text;

    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey']);
    return this.http.get(url, { headers }).map((res: Response) => res.json() || {});
  }

  orderDetails(v)
  {
    let headers = new Headers();
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.get(myGlobals.baseUrl+'api/order-details/'+v, { headers }).map(
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

  getlimit()
  {
    return this.http.get(myGlobals.baseUrl+'api/get-limit/').map(
          (res: Response) => res.json() || {});
  }

  inventory(id)
  {
    return this.http.get(myGlobals.baseUrl+'api/get-inventory/'+id).map(
          (res: Response) => res.json() || {});
  }

  updateInventory(data)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/updateInventory/',data, { headers }).map(
          (res: Response) => res.json() || {});
  }

  StoreImports(data)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('ApiKey',this.token['apiKey'])
    return this.http.post(myGlobals.baseUrl+'api/storeImports/',data, { headers }).map(
          (res: Response) => res.json() || {});
  }

  convert(id,type)
  {
    return this.http.get(myGlobals.baseUrl+'api/aplAlter/'+id+'/'+type).map(
          (res: Response) => res.json() || {});
  }



}
