import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { FrontendService }    from '../frontend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster';
declare var jQuery: any;
import * as myGlobals from '../../shared/globals';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [FrontendService]
})

export class ProductDetailsComponent implements OnInit {
  private toasterService: ToasterService;
  ProductDetails = {};
  ProductLoading : boolean = false;
  ProductId = '';
  productImagePath = '';
  token;
  variationCount;
  ChoosedVariation = '';
  ChoosedVariationname = '';
  quantity:number = 1;
  LoggedIn : boolean = false;

  constructor( private activatedRoute: ActivatedRoute  , public fb: FormBuilder , private router: Router , private _front: FrontendService , toasterService: ToasterService)
  {
    let params: any = this.activatedRoute.snapshot.params;
		this.ProductId = params.ProductId;
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    if( this.ProductId != '')
    this.getProductDetails(this.ProductId);
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
      this.LoggedIn = true;
    }
  }

  getProductDetails(id)
  {
    this._front.productDetails(id).subscribe(
      data => {
        this.ProductDetails = data.data;
        if(data.data.productVariations)
        {
          this.variationCount = data.data.productVariations.length;
          if(this.variationCount != 0)
          {
            this.ProductDetails['productPrice'] = data.data.productVariations[0].productVarPrice;
            this.ChoosedVariation     = data.data.productVariations[0].productVarID;
            this.ChoosedVariationname = data.data.productVariations[0].productVarItemId
          }
        }
        if(data.data.productImage !='')
        this.productImagePath = myGlobals.baseUrl + 'api/assets/uploads/catPics/' + data.data.productImage;
        else
        this.productImagePath = 'assets/img/demo.png';
      },
      err => console.log(err)
   );
  }

  addToCart(p)
  {
    console.log(p);
    var v = {};
    v['userId'] = this.token['userId'];
    v['productId'] = this.ProductId;
    v['quantity'] = this.quantity;
    if(this.ChoosedVariation !='')
    v['variationid'] = this.ChoosedVariation;
    else
    v['variationid'] = '';
    this._front.addToCart(v).subscribe(
      data => {
        if(data.success)
        {
          this.toasterService.pop('success',data.data,'');
        }
      },
      err => console.log(err)
   );
  }

  choooseVariation(varID,VarName,i)
  {
    this.ProductDetails['productPrice'] = this.ProductDetails['productVariations'][i]['productVarPrice'];
    this.ChoosedVariation = varID;
    this.ChoosedVariationname = VarName;
  }

  logout()
  {
    localStorage.removeItem("ppsPortalToken");
    this.router.navigate(['/customer-login']);
  }



}
