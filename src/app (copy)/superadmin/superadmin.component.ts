import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { SuperadminService }    from './superadmin.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css'],
  providers: [SuperadminService]
})
export class SuperadminComponent implements OnInit {
  private toasterService: ToasterService;
  login : FormGroup;
  http: Http;
  loginsubmitted: boolean = false;

  constructor(  fb: FormBuilder , public _http: Http , private _service: SuperadminService , private router: Router , toasterService: ToasterService)
  {
      this.toasterService = toasterService;
      this.http = _http;
      this.login = fb.group({
      'username' : [null,Validators.required],
      'password': [null,Validators.required]
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
    localStorage.removeItem('dbcse_reminders');
    this._service.login(value).subscribe(
      data => {
        if(data.status == 200)
        {
            this.loginsubmitted = false;
            this.toasterService.clear();
            this.toasterService.pop('success', 'Login Successful,' +' Redirecting...', '' );
            var tkn = JSON.stringify(data.data);
            localStorage.setItem('ppsSuperAdminToken', tkn);
            setTimeout((router: Router) => {
                this.router.navigate(['/admin-panel/list-orders/approved']);
            }, 1000);
        }
        else
        {
          this.toasterService.clear();
          this.toasterService.pop('error', 'Something Wrong', '' );
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

  ngOnInit() {

  }

}
