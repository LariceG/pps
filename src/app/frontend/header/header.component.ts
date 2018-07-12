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
  settings = {};
  ProductLoading : boolean = false;
  catalogue = '';
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
      console.log(tkn)
      console.log(this.token)
      this.LoggedIn = true;
    }
    this.getSettings();
  }

  getSettings()
  {
    this._front.getSettings().subscribe(
      data => {
        if(data.success)
        {
          for (let i = 0; i < data.data.length; i++)
          {
              this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
          }
          console.log(this.settings['catalogue']);
          this.catalogue = this.settings['catalogue'];
        }
      },
      err => console.log(err)
   );
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
