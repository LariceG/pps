import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HttpModule, Http,Response} from '@angular/http';
import { ToasterModule, ToasterService} from 'angular2-toaster';
import { SuperadminService }    from '../superadmin.service';
declare var jQuery: any;

@Component({
  selector: 'app-storeaccessrequests',
  templateUrl: './storeaccessrequests.component.html',
  styleUrls: ['./storeaccessrequests.component.css'],
  providers: [SuperadminService]
})

export class StoreaccessrequestsComponent implements OnInit {

  private toasterService: ToasterService;
  login : FormGroup;
  http: Http;
  loginsubmitted: boolean = false;
  Stores = [];
  orderLoading : boolean = true;
  StoreExpanded = {};

  constructor(  fb: FormBuilder , public _http: Http , private _service: SuperadminService , private router: Router , toasterService: ToasterService)
  {
      this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.sysAccessReq()
  }

  sysAccessReq()
  {
    this.orderLoading =  true;
    this._service.sysAccessReq().subscribe(
      data => {
        this.orderLoading =  false;
        if(data.success)
        {
          this.Stores = data.data;
        }
      },
      err =>
      {
        this.orderLoading =  false;
        this.Stores = [];
      }
   );
  }

  req(st,id)
  {
    this._service.enableStoreUserRequest(st,id).subscribe(
      data => {
        this.orderLoading =  false;
        if(data.success)
        {
          this.sysAccessReq();
        }
      },
      err => {
        this.orderLoading =  false;
    }
   );
  }

  openStore(i)
  {
    this.StoreExpanded = this.Stores[i];
    jQuery('#modal').modal('show');
  }

}
