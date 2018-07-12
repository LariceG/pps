import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FormService
{
    http: Http;
  constructor(public _http: Http)
  {
    this.http = _http;
  }

  add(v)
  {
  //  console.log(v);
    let body = JSON.stringify(v);
    let dataa = 'data='+body;
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    return this.http.post('api/forgot-password/',dataa, { headers }).map(
          (res: Response) => res.json() || {});
  }

  templatedummy(v)
  {
  //  console.log(v);
    let body = encodeURIComponent(JSON.stringify(v));
    let dataa = 'data='+body;
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    return this.http.post('http://1wayit.com/dibcase_app/api/ClientController/templatedummy/',dataa, { headers }).map(
          (res: Response) => res.json() || {});
  }

}
