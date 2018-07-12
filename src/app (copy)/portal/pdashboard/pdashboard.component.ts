import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { PortalService }    from '../portal.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-pdashboard',
  templateUrl: './pdashboard.component.html',
  styleUrls: ['./pdashboard.component.css'],
  providers: [PortalService]
})

export class PdashboardComponent implements OnInit {
  token = {};
  dashboardInfo = {};

  constructor(  private route : ActivatedRoute , fb: FormBuilder , public _http: Http , private _service: PortalService , private router: Router , toasterService: ToasterService)
  {

  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);
    this.getdashboard();
  }

  getdashboard()
  {
    if(this.token['userType'] == 3)
    {
      var url = 'get-apdm-dashboard';
      var id = parseInt(this.token['apdm'].apdmID);
    }
    else
    {
      var url = 'get-admin-dashboard';
      var id = 5;
    }

    this._service.getdashboard(url,id).subscribe(
      data => {
        if(data.success)
        {
          this.dashboardInfo = data.data;
        }
      }
    );
  }

}
