import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
import { AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';
import * as myGlobals from '../../shared/globals';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';

@Component({
  selector: 'app-asign-ex-apls',
  templateUrl: './asign-ex-apls.component.html',
  styleUrls: ['./asign-ex-apls.component.css'],
  providers: [SuperadminService]
})


export class AsignExAplsComponent implements OnInit {

  @Input() Apdm: string;
  protected dataService: CompleterData;
  clickedObj = {};
  AssignedStores  = [];
  private toasterService: ToasterService;
  AsignIdtoRemove;

  constructor( toasterService: ToasterService, private completerService: CompleterService , private router: Router , private _sp: SuperadminService , private fb: FormBuilder)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    console.log(this.Apdm)
    this.dataService  = this.completerService.remote(myGlobals.baseUrl+'api/getUnAssignedStoresExApl/'+this.Apdm+'/', 'storeName,', 'storeName');
    this.getAssignes();
  }

  StrSelected(e)
  {
    if(e)
    {
      this.clickedObj = e.originalObject;
      var isConfirmed = confirm("Assign this store?");
      if(isConfirmed)
      {
        var value          = {};
        // value['data']['apdmID']    = this.Apdm;
        // value['data']['storeIinsed']   = e.originalObject.storeId;
        value['data'] = {};
        value['data']['apdmID']    = this.Apdm;
        value['data']['storeId']   = e.originalObject.storeId;

        value['type']    = 'exaplassign';
        this._sp.insert(value).subscribe(
          data => {
            if(data.success)
            {
              this.getAssignes();
            }
          },
          err => console.log(err)
        )
      }
    }
  }

  getAssignes()
  {
    this._sp.getExAplAssignes(this.Apdm).subscribe(
      data => {
        if(data.success)
        {
          this.AssignedStores = data.data;
        }
      },
      err => {
        if(err.status == 409)
        {
          this.AssignedStores = [];
        }
      }
    )
  }

  removeAsignStoreConfirm(asignId)
  {
    this.AsignIdtoRemove = asignId;
    jQuery('#delete').modal('show');
  }

  removeAsignStore(asignId)
  {
    var v = {};
    v['id'] = asignId;
    v['type'] = 'removeAsignStoreExapl';

    var isConfirmed = confirm("Delete this store?");
    if(isConfirmed)
    {
      this._sp.delete(v).subscribe(
        data => {
          if(data.success)
          {
            // jQuery('#delete').modal('hide');
            this.toasterService.pop('success','Store removed','');
            this.getAssignes()
          }
        },
        err => console.log(err)
      )
    }
  }

}
