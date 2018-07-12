import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HttpModule, Http,Response} from '@angular/http';
import { CustomerService }    from './customer.service';
import { ToasterModule, ToasterService} from 'angular2-toaster';
declare var jQuery: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})


export class CustomerComponent implements OnInit {

  private toasterService: ToasterService;
  login : FormGroup;
  http: Http;
  loginsubmitted: boolean = false;
  eRequestsubmitted: boolean = false;
  eRequest : FormGroup;
  sys_anyInternational = 'yes';
  sys_annualSpendEas   = '$0-10,000';
  sys_typeOfBuss = 'Corporation';


  constructor(  fb: FormBuilder , public _http: Http , private _service: CustomerService , private router: Router , toasterService: ToasterService)
  {
      this.toasterService = toasterService;
      this.http = _http;

      this.login = fb.group({
      'username' : [null,Validators.required],
      'password': [null,Validators.required]
    })

    this.eRequest = fb.group({
    'sys_name' : ['',Validators.required],
    'sys_companyName': ['',Validators.required],
    'sys_bussAddress': [''],
    'sys_city': [''],
    'sys_state': [''],
    'sys_zip': [''],
    'sys_country': [''],
    'sys_ideNumber': [''],
    'sys_mailAddress': [''],
    'sys_mailCity': [''],
    'sys_mailState': [''],
    'sys_mailZip': [''],
    'sys_mailCountry': [''],
    'sys_mailPhone': [''],
    'sys_mailEmail': ['',Validators.required],
    'sys_mailExt': [''],
    'sys_numberOfLoc' : ['']
  })


  }

  responseStatus:Object= [];
  submitForm(value: any)
  {
    this.loginsubmitted = true;

    if( !this.login.valid )
    {
      return false;
    }

    this.toasterService.pop('info',' Loading...', '' );
    this._service.login(value).subscribe(
      data => {
        console.log(data);
        if(data.status == 200)
        {
            this.loginsubmitted = false;
            this.toasterService.clear();
            this.toasterService.pop('success', 'Login Successful,' +' Redirecting...', '' );
            var tkn = JSON.stringify(data.data);
            localStorage.setItem('ppsPortalToken', tkn);
            setTimeout((router: Router) => {
                this.router.navigate(['/profile/orders']);
            }, 1000);
        }
        else
        {
          this.toasterService.clear();
          this.toasterService.pop('error', data.data, '' );
        }
      },
      err => {
        this.toasterService.clear();
        if(err.status == 409)
        this.toasterService.pop('error', 'Invalid Login Details', '' );
        else
        this.toasterService.pop('error', 'Something wro ng,try again', '' );
    }
   );
  }

  submiteRequest(value)
  {

    this.eRequestsubmitted = true;

    if( !this.eRequest.valid )
    {
      return false;
    }
    value['sys_annualSpendEas'] = this.sys_annualSpendEas;
    value['sys_anyInternational'] = this.sys_anyInternational;
    this._service.submiteRequest(value).subscribe(
      data => {
        if(data.success)
        {
          jQuery('#eRequest').modal('hide');
          this.toasterService.pop('success', data.data , '' );
        }
      },
      err => {
      }
    );
  }

  ngOnInit()
  {

  }

}
