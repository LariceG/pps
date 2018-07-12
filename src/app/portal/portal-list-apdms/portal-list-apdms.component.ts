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
  perpage = 10;
  page;
  totalItem;
  token = {};
  ApdmToDelete;
  type = 9;


  constructor( private route : ActivatedRoute  , public fb: FormBuilder , private router: Router , private _p: PortalService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);

    this.route.params.subscribe(routeParams => {
        var type = routeParams['readonly'];
        console.log('type');
        console.log(type);
        console.log('type');
        if(type && type == 'readonly')
        {
          this.type = 9;
          this.getapdms(1,9); // 9 is the userType for ex apl
        }
        else
        {
          this.type = 3;
          this.getapdms(1,3); // 3 is the userType for apl
        }
      });
  }


  getapdms(e,type)
  {
    this.apdmLoading = true;
    this._p.apdmUserListing(e,type,this.perpage).subscribe(
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
          this.getapdms(1,this.type);
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
