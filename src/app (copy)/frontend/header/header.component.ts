import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { FrontendService }    from '../frontend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster';
declare var jQuery: any;
import * as myGlobals from '../../shared/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [FrontendService]
})

export class HeaderComponent implements OnInit {
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
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    if (localStorage.getItem("ppsPortalToken") !== null)
    {
      let tkn = localStorage.getItem('ppsPortalToken');
      this.token = JSON.parse(tkn);
      this.LoggedIn = true;
    }
  }

  // cartItems(u)
  // {
  //   var v = {};
  //   v['userId'] = u;
  //   v['productId'] = this.ProductId;
  //   v['quantity'] = this.quantity;
  //   if(this.ChoosedVariation !='')
  //   v['variationid'] = this.ChoosedVariation;
  //   else
  //   v['variationid'] = '';
  //   this._front.addToCart(v).subscribe(
  //     data => {
  //       if(data.success)
  //       {
  //
  //       }
  //     },
  //     err => console.log(err)
  //  );
  // }


}
