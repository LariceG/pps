import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
  providers: [SuperadminService]
})

export class ListproductComponent implements OnInit {
  private toasterService: ToasterService;
  Products = [];
  ProductLoading : boolean = false;
  CatList = [];
  perpage = 4;
  page;
  catID = 1;
  totalItem;
  FilterCats = [];
  ProductToDelete = '';
  ProductToEdit =  '';
  ProductEdit : boolean = false;

  constructor( public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.getProducts(1);
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.ProductEdit = false;
    });
  }

  getCats()
  {
    this._sp.getCats().subscribe(
      data => {
        if(data.success)
        this.CatList = data.data;
      },
      err => console.log(err)
   );
  }

  getProducts(e)
  {
    var v = {};
    v['perpage'] = this.perpage;
    v['page'] = e;
    v['cats'] = this.FilterCats;
    this._sp.getProducts(v).subscribe(
      data => {
        if(data.success)
        {
          this.Products = data.data.result;
          this.totalItem = data.data.total_rows;
        }
      },
      err => console.log(err)
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

  ProductDeleteConfirm(pid)
  {
    this.ProductToDelete = pid;
    jQuery('#deleteModal').modal('show');
  }

  deleteProduct()
  {
    var value             = {};
    value['id']       = this.ProductToDelete;
    value['type']   = 'product';
    this._sp.delete(value).subscribe(
      data => {
        if(data.success)
        {
          jQuery('#deleteModal').modal('hide');
          this.ProductToDelete = '';
          this.getProducts(1);
        }
      },
      err => console.log(err)
    );
  }

  editProduct(pid)
  {
    console.log(pid);
    console.log(this.ProductToEdit);
    this.ProductToEdit = pid;
    jQuery('#updateModal').modal('show');
    this.ProductEdit = true;
  }

  handleProductUpdate(e)
  {
    if(e.success)
    {
      this.toasterService.pop('success', e.data ,'' );
      this.getCats();
      jQuery('#updateModal').modal('hide');
      this.ProductToEdit = '';
      this.ProductEdit = false;
      this.getProducts(1);
    }
  }

  productStock(id,oldStatus)
  {
    var status = oldStatus == 1 ? 0 : 1;
    var value             = {};
    value['id']       = id;
    value['type']   = 'productStockStatus';
    value['IsAvailable']       = status;
    this._sp.update(value).subscribe(
      data => {
        if(data.success)
        {
          jQuery('#deleteModal').modal('hide');
          this.ProductToDelete = '';
          this.getProducts(1);
        }
      },
      err => console.log(err)
    );
  }





}
