import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { PortalService }    from '../portal.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-mystores',
  templateUrl: './mystores.component.html',
  styleUrls: ['./mystores.component.css'],
  providers: [PortalService]
})


export class MystoresComponent implements OnInit
{

  token = {};
  Orders = [];
  Stores = [];
  constructor(  fb: FormBuilder , public _http: Http , private _service: PortalService , private router: Router , toasterService: ToasterService)
  {

  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);

    if(this.token['apdm'].apdmID)
    this.getStores(this.token['apdm'].apdmID,this.token['userType']);
  }

  getStores(apdm,type)
  {
    this._service.getAdpmStores(apdm,type).subscribe(
      data => {
        if(data.status == 200)
        {
          this.Stores = data.data;
        }
       }
    );
  }

}
