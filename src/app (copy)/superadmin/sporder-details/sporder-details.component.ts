import { Component, OnInit , AfterViewInit} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-sporder-details',
  templateUrl: './sporder-details.component.html',
  styleUrls: ['./sporder-details.component.css'],
  providers: [SuperadminService]
})

export class SporderDetailsComponent implements OnInit {
  private toasterService: ToasterService;
  orderid;
  Orderdetails = {};
  token = {};
  storeLoading : boolean = false;

  constructor( private route : ActivatedRoute , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
    let params: any = this.route.snapshot.params;
		this.orderid = params.orderid;
  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);
    this.myOrders()
  }

  myOrders()
  {
    let tkn = localStorage.getItem('ppsPortalToken');
    let tknn = JSON.parse(tkn);

    this._sp.orderDetails(this.orderid).subscribe(
      data => {
        if(data.status == 200)
        {
          this.Orderdetails = data.data;
        }
      },
      err => {
    }
   );
  }

}
