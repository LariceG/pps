import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HttpModule, Http,Response} from '@angular/http';
import { CustomerService }    from '../customer.service';
import { ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
  providers: [CustomerService]
})

export class CustomerProfileComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ,  fb: FormBuilder , public _http: Http , private _service: CustomerService , private router: Router , toasterService: ToasterService)
  {

  }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem("ppsPortalToken");
    this.router.navigate(['/customer-login']);
  }


}
