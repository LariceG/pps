import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { FrontendService }    from '../frontend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster';
declare var jQuery: any;
import * as myGlobals from '../../shared/globals';
import { PortalService }    from '../../portal/portal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [FrontendService,PortalService]
})

export class CartComponent implements OnInit {
  private toasterService: ToasterService;
  ProductDetails = {};
  ProductLoading : boolean = true;
  ProductId = '';
  productImagePath = '';
  token;
  variationCount;
  ChoosedVariation = '';
  ChoosedVariationname = '';
  quantity:number = 1;
  LoggedIn : boolean = false;
  cartData = {};
  whichStore = '';
  Stores = [];

  constructor( private _service: PortalService , private activatedRoute: ActivatedRoute  , public fb: FormBuilder , private router: Router , private _front: FrontendService , toasterService: ToasterService)
  {
    let params: any = this.activatedRoute.snapshot.params;
		this.ProductId = params.ProductId;
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
      this.LoggedIn = true;
      this.getCartDetails(this.token['userId']);

      if(this.token.userType == 3)
      {
        this.getStores(this.token.apdm.apdmID);
      }
    }
  }

  getStores(apdm)
  {
    this._service.getAdpmStores(apdm).subscribe(
      data => {
        if(data.status == 200)
        {
          this.Stores = data.data;
        }
       }
    );
  }

  getCartDetails(id)
  {
    this.ProductLoading = true;
    this._front.getCartDetails(id).subscribe(
      data => {
        this.cartData = data;
        this.ProductLoading = false;
      },
      err => {
        this.ProductLoading = false;
        if(err.status == 409)
        {
          this.cartData = {};
        }
      }
   );
  }

  doSum(i)
  {
    var row = this.cartData['data'][i];
    console.log(row);
    var v = {};
    v['userId'] = this.token['userId'];
    v['productId'] = row['productId'];
    v['quantity'] = row['quantity'];
    v['bkId'] = row['bkId'];

    this._front.updateCart(v).subscribe(
      data => {
        if(data.success)
        {
          for(let data in this.cartData)
          {
            var Total = 0;
            for(let row in this.cartData[data])
            {
              var Row  = this.cartData[data][row]
              Row.orderProductPrice = Row.productPrice * Row.quantity;
              Total += Row.orderProductPrice;
            }
            this.cartData['totalItemPrice'] =  Total;
          }
        }
      },
      err => console.log(err)
   );


  }


  SaveMyOrders()
  {
    let tkn = localStorage.getItem('ppsPortalToken');
    var token = JSON.parse(tkn);
    var v = {};
    if(token.userType == 3)
    {
      if(this.whichStore == '')
      {
        this.toasterService.pop('error','Please select store for which you are placcing order','');
        return false;
      }
      v['userId'] = this.token['userId'];
      v['orderForStore'] = this.whichStore;
      v['orderLevel'] = 1;
    }
    else
    {
      v['orderLevel'] = 2;
      v['userId'] = this.token['userId'];
    }

    if(this.cartData['totalItemPrice'] > 250)
    {
      this.toasterService.pop('error','You have exceeded your limit of $250','');
      return false;
    }

    this._front.SaveMyOrders(v).subscribe(
      data => {
        if(data.success)
        {
          this.toasterService.pop('success','Order has been Placed','');
          this.getCartDetails(this.token['userId']);
        }
      },
      err => console.log(err)
   );
  }

  delete(id,type)
  {
    this._front.delete(id,type).subscribe(
      data => {
        if(data.success)
        {
          this.toasterService.pop('success','Product has been removed','');
          this.getCartDetails(this.token['userId']);
        }
      },
      err => console.log(err)
   );
  }

  logout()
  {
    localStorage.removeItem("ppsPortalToken");
    if(this.token.userType == 3)
    this.router.navigate(['/portal']);
    else
    this.router.navigate(['/customer-login']);
  }


}
