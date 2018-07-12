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

  constructor( public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.getapdms(1);
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.ApdmEdit = false;
    });
    jQuery('#assignment').on('hidden.bs.modal', function () {
      thiss.Assignment = false;
    });
  }


  getapdms(e)
  {
    this.apdmLoading = true;
    this._sp.apdmUserListing(e,this.perpage).subscribe(
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
    value['type']   = 'apdm';
    this._sp.delete(value).subscribe(
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
      this.getapdms(1);
    }
  }

  assignStore(apdm)
  {
    this.Apdm = apdm;
    this.Assignment = true;
    jQuery('#assignment').modal('show');
  }




}
