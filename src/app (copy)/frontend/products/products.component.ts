import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { FrontendService }    from '../frontend.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';
import * as myGlobals from '../../shared/globals';
import { TreeComponent, TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [FrontendService]
})

export class ProductsComponent implements OnInit {

  private toasterService: ToasterService;
  Products = [];
  ProductLoading : boolean = true;
  CatList = [];
  perpage = 9;
  page;
  catID = 1;
  totalItem;
  FilterCats = [];
  ProductToDelete = '';
  ProductToEdit =  '';
  ProductEdit : boolean = false;
  token;
  LoggedIn : boolean = false;

  ParentCats = [];
  Show = 'products';
  nodes = [];
  catt;
  @ViewChild('tree') treeComponent: TreeComponent;

  // nodes = [
  //   {
  //     id: 11,
  //     name: 'root1',
  //   },
  //   {
  //     id: 1,
  //     name: 'root1',
  //     children: [
  //       { id: 2, name: 'child1' },
  //       { id: 3, name: 'child2' }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'root2',
  //     children: [
  //       { id: 5, name: 'child2.1' },
  //       {
  //         id: 6,
  //         name: 'child2.2',
  //         children: [
  //           { id: 7, name: 'subsub' }
  //         ]
  //       }
  //     ]
  //   }
  // ];



  constructor( public fb: FormBuilder , private router: Router , private _front: FrontendService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
    // let tkn = localStorage.getItem('ppsPortalToken');
    // this.token = JSON.parse(tkn);
  }

  ngOnInit()
  {
    this.getCatsData();
    this.getCatTable('all','parentCats');
    this.getProducts(1);
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
      this.LoggedIn = true;
    }
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.ProductEdit = false;
    });
    const treeModel:TreeModel = this.treeComponent.treeModel;
    const firstNode:TreeNode = treeModel.getFirstRoot();
    if(firstNode)
    firstNode.setActiveAndVisible();
  }

  getCats()
  {
    this._front.getCats().subscribe(
      data => {
        if(data.success)
        this.CatList = data.data;
      },
      err => console.log(err)
   );
  }

  getCatTable(id,type)
  {
    this._front.getWhere(id,type).subscribe(
      data => {
        if(data.success)
        {
          this.ParentCats = data.data;
        }
      },
      err => console.log(err)
   );
  }


  getProducts(e)
  {
    this.ProductLoading = true;
    this.Products = [];
    var v = {};
    v['perpage'] = this.perpage;
    v['page'] = e;
    v['cats'] = this.FilterCats;
    v['cat'] = this.catt;
    this._front.getProducts(v).subscribe(
      data => {
        if(data.success)
        {
          this.ProductLoading = false;
          this.Products = data.data.result;
          this.totalItem = data.data.total_rows;
        }
      },
      err => {

        if(err.status == 409)
        {
          this.ProductLoading = false;
          this.Products = [];
        }
      }
   );
   return e;
  }

  getCatsData()
  {
    this._front.getCatsData().subscribe(
      data => {
        this.nodes = data.data;
        this.nodes.unshift({id:'all',name : 'ALL CATEGORIES'});
        if(this.nodes.length != 0)
        {
          var thiss = this;
          setTimeout(function(){
            const treeModel:TreeModel = thiss.treeComponent.treeModel;
            const firstNode:TreeNode = treeModel.getFirstRoot();
            firstNode.setActiveAndVisible();
          }, 300);

        }
      },
      err => console.log(err)
   );
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

  openMore(e,cat)
  {
    if(e)
    {
      this.getCatTable(cat,'parentCats');
    }
    else
    {
      this.Show = 'products';
      this.FilterCats = [cat];
      this.getProducts(1);
    }
  }

  onEvent(e)
  {
    console.log(e);
  }

  setState(e)
  {
    console.log(e);
    this.catt = e.focusedNodeId;
    this.getProducts(1);
  }


}
