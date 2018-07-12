import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { PortalService }    from '../portal.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-porder-details',
  templateUrl: './porder-details.component.html',
  styleUrls: ['./porder-details.component.css'],
  providers: [PortalService]
})

export class PorderDetailsComponent implements OnInit {
  token = {};
  orderid;
  Orderdetails = {};
  storeLoading : boolean = false;

  constructor(  private route : ActivatedRoute , fb: FormBuilder , public _http: Http , private _service: PortalService , private router: Router , toasterService: ToasterService)
  {
    let params: any = this.route.snapshot.params;
		this.orderid = params.orderid;
  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);
    this.myOrders()
  }

  myOrders()
  {
    let tkn = localStorage.getItem('ppsPortalToken');
    let tknn = JSON.parse(tkn);

    this._service.orderDetails(this.orderid).subscribe(
      data => {
        if(data.status == 200)
        {
          this.Orderdetails = data.data;
        }
      },
      err => {
    }
   );
  }

}
