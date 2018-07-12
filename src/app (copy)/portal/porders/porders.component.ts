import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { PortalService }    from '../portal.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-porders',
  templateUrl: './porders.component.html',
  styleUrls: ['./porders.component.css'],
  providers: [PortalService]
})

export class PordersComponent implements OnInit {

  token = {};
  Orders = [];
  storeLoading : boolean = false;
  typee;
  searchText = '';

  constructor(  private route : ActivatedRoute , fb: FormBuilder , public _http: Http , private _service: PortalService , private router: Router , toasterService: ToasterService)
  {

  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);

    this.route.params.subscribe(routeParams => {
      this.typee = routeParams['type'];
        var type = routeParams['type'];
        console.log(type);

        if(type == 'apdm')
        this.getPortalOrders('admin-apdm','');

        else if(type == 'approved')
        this.getPortalOrders('admin-approved','');

        else if(type == 'pending')
        this.getPortalOrders('admin-pending','');

        else if(type == 'my')
        this.getPortalOrders('apdm-my',this.token['apdm'].apdmID);

        else if(type == 'stores')
        this.getPortalOrders('apdm-stores',this.token['apdm'].apdmID);

      });
    // if(this.token['apdm'].apdmID)
    // this.getOrders()
  }

  getOrders()
  {
    // this.storeLoading = true;
    this._service.getAdpmOrders(this.token['apdm'].apdmID).subscribe(
      data => {
        if(data.status == 200)
        {
          this.storeLoading = false;
          this.Orders       = data.data;
        }
      }
    );
  }

  fetchOrders()
  {
    console.log('here');
    let params: any = this.route.snapshot.params;
    var type = params['type'];
    if(type == 'apdm')
    this.getPortalOrders('admin-apdm','');

    else if(type == 'approved')
    this.getPortalOrders('admin-approved','');

    else if(type == 'pending')
    this.getPortalOrders('admin-pending','');

    else if(type == 'my')
    this.getPortalOrders('apdm-my',this.token['apdm'].apdmID);

    else if(type == 'stores')
    this.getPortalOrders('apdm-stores',this.token['apdm'].apdmID);
  }

  getPortalOrders(type,id)
  {
    if( this.searchText  == '')
    var text = 'all';
    else
    var text = this.searchText;
    
    this.storeLoading = true;
    this._service.getPortalOrders(type,id,text).subscribe(
      data => {
        if(data.status == 200)
        {
          this.storeLoading = false;
          this.Orders       = data.data;
        }
      }
      ,
      err => {
        if(err.status == 409)
        {
          this.storeLoading = false;
          this.Orders       = [];
        }
      }
    );
  }

  UpdateOrderStatus(st,order)
  {
    var value = {};
    value['data'] = {}
    value['data']['orderStatus'] = st;
    value['ref'] = order
    value['type'] = 'orderStatus';
    this._service.updatepost(value).subscribe(
      data => {
        console.log(data);
        if(data.status == '200')
        {
          console.log('okk')
          this.fetchOrders();
        }
      }
    );
  }

}
