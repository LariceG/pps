import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HttpModule, Http,Response} from '@angular/http';
import { PortalService }    from '../portal.service';
import { ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-porders',
  templateUrl: './porders.component.html',
  styleUrls: ['./porders.component.css'],
  providers: [PortalService]
})

export class PordersComponent implements OnInit {

  token = {};
  Orders = [];
  TotalOrders = 0;
  storeLoading : boolean = false;
  typee;
  searchText = '';
  perpage = 10;
  page;
  event  = 1;

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

        if(type == 'apl')
        this.getPortalOrders(this.event,'admin-apdm','');

        else if(type == 'approved')
        this.getPortalOrders(this.event,'admin-approved','');

        else if(type == 'pending')
        this.getPortalOrders(this.event,'admin-pending','');

        else if(type == 'my')
        {
          if(this.token['userType'] == 9)
          this.getPortalOrders(this.event,'exapl-my',this.token['apdm'].apdmID);
          else
          this.getPortalOrders(this.event,'apdm-my',this.token['apdm'].apdmID);
        }

        else if(type == 'stores')
        {
          if(this.token['userType'] == 9)
          this.getPortalOrders(this.event,'exapl-stores',this.token['apdm'].apdmID);
          else
          this.getPortalOrders(this.event,'apdm-stores',this.token['apdm'].apdmID);
        }

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

  fetchOrders(page)
  {
    console.log('here');
    let params: any = this.route.snapshot.params;
    var type = params['type'];
    if(type == 'apl')
    this.getPortalOrders(page,'admin-apdm','');

    else if(type == 'approved')
    this.getPortalOrders(page,'admin-approved','');

    else if(type == 'pending')
    this.getPortalOrders(page,'admin-pending','');

    else if(type == 'my')
    this.getPortalOrders(page,'apdm-my',this.token['apdm'].apdmID);

    else if(type == 'stores')
    this.getPortalOrders(page,'apdm-stores',this.token['apdm'].apdmID);
    return page;
  }

  getPortalOrders(page,type,id)
  {
    this.event = page;
    if( this.searchText  == '')
    var text = 'all';
    else
    var text = this.searchText;

    this.storeLoading = true;
    this._service.getPortalOrders(type,id,text,page,this.perpage).subscribe(
      data => {
        if(data.status == 200)
        {
          this.storeLoading = false;
          this.Orders       = data.data.data;
          this.TotalOrders       = data.data.total;
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
    return event;
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
          this.fetchOrders(this.event);
        }
      }
    );
  }

}
