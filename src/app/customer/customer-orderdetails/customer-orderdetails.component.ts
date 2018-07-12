import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HttpModule, Http,Response} from '@angular/http';
import { CustomerService }    from '../customer.service';
import { ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-customer-orderdetails',
  templateUrl: './customer-orderdetails.component.html',
  styleUrls: ['./customer-orderdetails.component.css'],
  providers: [CustomerService]
})

export class CustomerOrderdetailsComponent implements OnInit {

  private toasterService: ToasterService;
  orderid;
  Orderdetails = {};

  constructor( private activatedRoute: ActivatedRoute ,  fb: FormBuilder , public _http: Http , private _service: CustomerService , private router: Router , toasterService: ToasterService)
  {
    let params: any = this.activatedRoute.snapshot.params;
		this.orderid = params.orderid;
      this.toasterService = toasterService;
  }


  ngOnInit()
  {
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

  logout()
  {
    localStorage.removeItem("ppsPortalToken");
    this.router.navigate(['/customer-login']);
  }



}
