import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-listapdm',
  templateUrl: './listapdm.component.html',
  styleUrls: ['./listapdm.component.css'],
  providers: [SuperadminService]
})

export class ListapdmComponent implements OnInit {

  private toasterService: ToasterService;
  apdmList = [];
  apdmLoading : boolean = false;
  ApdmToDelete = '';
  ApdmToEdit = '';
  ApdmEdit : boolean = false;
  Assignment : boolean =  false;
  ExAplAssignment : boolean =  false;

  CatList = [];
  perpage = 10;
  page;
  catID = 1;
  totalItem;
  FilterCats = [];
  ProductToDelete = '';
  ProductToEdit =  '';
  ProductEdit : boolean = false;
  Apdm;
  type = 9;
  searchText = '';
  storesBulk = [];

  constructor( private route : ActivatedRoute , public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
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

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.ApdmEdit = false;
    });
    jQuery('#assignment').on('hidden.bs.modal', function () {
      thiss.Assignment = false;
      thiss.ExAplAssignment = false;
    });
  }


  getapdms(e,type)
  {
    this.apdmLoading = true;
    this._sp.apdmUserListing(e,type,this.perpage,this.searchText).subscribe(
      data => {
        this.apdmLoading = false;
        this.apdmList = data.data.result;
        this.totalItem = data.data.total_rows;
      },
      err => {
        if(err.status == 409)
        {
          this.apdmList = [];
          this.totalItem = 0;
          this.apdmLoading = false;
        }
      }
   );
   return e;
  }

  PushFilterCats(cat)
  {
    this.FilterCats.push(cat);
  }

  PopFilterCats(cat)
  {
    var index = this.FilterCats.indexOf(cat);
    if (index > -1) {
      this.FilterCats.splice(index, 1);
    }
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
    if(this.type == 9)
    value['type']   = 'exapl';
    else
    value['type']   = 'apdm';
    this._sp.delete(value).subscribe(
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

  editProduct(aid)
  {
    this.ApdmToEdit = aid;
    jQuery('#updateModal').modal('show');
    this.ApdmEdit = true;
  }

  handleApdmUpdate(e)
  {
    if(e.success)
    {
      this.toasterService.pop('success', e.data ,'' );
      // this.getCats();
      jQuery('#updateModal').modal('hide');
      this.ApdmToEdit = '';
      this.ApdmEdit = false;
      this.getapdms(1,this.type);
    }
  }

  assignStore(apdm,type)
  {
    this.Apdm = apdm;
    if(type == 9)
    this.ExAplAssignment = true;
    else
    this.Assignment = true;
    jQuery('#assignment').modal('show');
  }

  Search()
  {
    this.getapdms(1,this.type);
  }

  convert(id,type)
  {
    var con = confirm('Are you sure');
    if(con == false)
    {
      return false;
    }
    // if(action == 'confirmation')
    // {
    //   jQuery('#convert').modal('show');
    //   return false;
    // }
    this.toasterService.pop('info','Preparing Conversion','');
    this._sp.convert(id,type).subscribe(
      data => {
        if(data.success)
        {
          jQuery('#convert').modal('hide');
          this.toasterService.pop('success',data.data,'');
          this.getapdms(1,this.type);
        }
      },
      err => console.log(err)
    );
  }
  deleteee()
  {
    var thiss = this;
    jQuery('input:checkbox.storeChecks').each(function () {
      if(this.checked)
      {
        var atr = jQuery(this).attr('dd');
        if(atr)
        thiss.storesBulk.push(atr);
      }
      else
      {
        console.log('here');
        var atr = jQuery(this).attr('dd');
        if(atr)
        {
          var idx = thiss.storesBulk.indexOf(atr);
          if(idx != -1)
          {
            thiss.storesBulk.splice(idx,1);
          }
        }
      }

      });

      if(thiss.storesBulk.length == 0)
      {
        thiss.toasterService.pop('error', 'Please select atleast 1 store' ,'' );
      }
      else
      {
        jQuery('#deleteModal2').modal('show');
      }
  }

  bulkDelete()
  {
    var thiss = this;
    jQuery('input:checkbox.storeChecks').each(function () {
      if(this.checked)
      {
        var atr = jQuery(this).attr('dd');
        if(atr)
        thiss.storesBulk.push(atr);
      }
      else
      {
        console.log('here');
        var atr = jQuery(this).attr('dd');
        if(atr)
        {
          var idx = thiss.storesBulk.indexOf(atr);
          if(idx != -1)
          {
            thiss.storesBulk.splice(idx,1);
          }
        }
      }
      });

      if(thiss.storesBulk.length == 0)
      {
        thiss.toasterService.pop('error', 'Please select atleast 1 store' ,'' );
      }

    var value       = {}
    var searchValue = this.storesBulk.join('_');
    value['id']     = searchValue ;
    if(this.type == 9)
    value['type']   = 'bulkExApls';
    else
    value['type']   = 'bulkApls';
    this._sp.delete(value).subscribe(
      data => {
        if(data.success)
        {
          this.getapdms(1,this.type);
          jQuery('#deleteModal2').modal('hide');
          this.storesBulk = [];
        }
      },
      err => console.log(err)
    );
  }

  isAllChecked()
  {
    return this.apdmList.every(_ => _.state);
  }

  checkAll(ev)
  {
    this.apdmList.forEach(x => x.state = ev.target.checked)
    // var objj = jQuery('.storeChecks');
    // console.log(objj);
  }




}
