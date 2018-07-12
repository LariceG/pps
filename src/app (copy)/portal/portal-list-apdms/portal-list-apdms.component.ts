import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../../superadmin/superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';
import { PortalService }    from '../portal.service';

@Component({
  selector: 'app-portal-list-apdms',
  templateUrl: './portal-list-apdms.component.html',
  styleUrls: ['./portal-list-apdms.component.css'],
  providers : [PortalService]
})

export class PortalListApdmsComponent implements OnInit {
  apdmList = [];
  private toasterService: ToasterService;
  apdmLoading : boolean = false;
  perpage = 3;
  page;
  totalItem;
  token = {};
  ApdmToDelete;

  constructor( public fb: FormBuilder , private router: Router , private _p: PortalService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);
    this.getapdms(1);
  }


  getapdms(e)
  {
    this.apdmLoading = true;
    this._p.apdmUserListing(e,this.perpage).subscribe(
      data => {
        this.apdmLoading = false;
        this.apdmList = data.data.result;
        this.totalItem = data.data.total_rows;
      },
      err => console.log(err)
   );
   return e;
  }

  DeleteConfirm(apdmid)
  {
    this.ApdmToDelete = apdmid;
    jQuery('#deleteModal').modal('show');
  }


  deleteApdm()
  {
    var value             = {};
    value['id']       = this.ApdmToDelete;
    value['type']   = 'apdm';
    this._p.delete(value).subscribe(
      data => {
        if(data.success)
        {
          this.toasterService.pop('success',data.data,'');
          jQuery('#deleteModal').modal('hide');
          this.ApdmToDelete = '';
          this.getapdms(1);
        }
      },
      err => console.log(err)
    );
  }

  // editProduct(aid)
  // {
  //   this.ApdmToEdit = aid;
  //   jQuery('#updateModal').modal('show');
  //   this.ApdmEdit = true;
  // }

  // handleApdmUpdate(e)
  // {
  //   if(e.success)
  //   {
  //     this.toasterService.pop('success', e.data ,'' );
  //     jQuery('#updateModal').modal('hide');
  //     this.ApdmToEdit = '';
  //     this.ApdmEdit = false;
  //     this.getapdms(1);
  //   }
  // }


}
