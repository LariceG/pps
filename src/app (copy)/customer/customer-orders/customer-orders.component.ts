import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HttpModule, Http,Response} from '@angular/http';
import { CustomerService }    from '../customer.service';
import { ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
  providers: [CustomerService]
})

export class CustomerOrdersComponent implements OnInit {

  private toasterService: ToasterService;
  login : FormGroup;
  http: Http;
  loginsubmitted: boolean = false;
  Orders = [];
  orderLoading : boolean = true;

  constructor(  fb: FormBuilder , public _http: Http , private _service: CustomerService , private router: Router , toasterService: ToasterService)
  {
      this.toasterService = toasterService;
  }


  ngOnInit()
  {
    this.myOrders()
  }

  myOrders()
  {
    this.orderLoading =  true;
    let tkn = localStorage.getItem('ppsPortalToken');
    let tknn = JSON.parse(tkn);

    this._service.myOrders(tknn['userId']).subscribe(
      data => {
        this.orderLoading =  false;
        if(data.status == 200)
        {
          this.Orders = data.data;
        }
      },
      err => {
        this.orderLoading =  false;
    }
   );
  }

  logout()
  {
    localStorage.removeItem("ppsPortalToken");
    this.router.navigate(['/customer-login']);
  }



}
