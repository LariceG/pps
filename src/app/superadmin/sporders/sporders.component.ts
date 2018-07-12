import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as myGlobals from '../../shared/globals';


@Component({
  selector: 'app-sporders',
  templateUrl: './sporders.component.html',
  styleUrls: ['./sporders.component.css'],
  providers: [SuperadminService]
})

export class SpordersComponent implements OnInit {
  private toasterService: ToasterService;
  Orders = [];
  storeToEdit;
  storeEdit : boolean = false;
  perpage = 10;
  page = 1;
  TotalOrders = 1;
  totalItem;
  storeLoading : boolean = false;
  storeToDelete;
  searchText = '';
  limit250 = 1;
  orderFilter = 'approved';
  TrackNumber = '';
  orderToShip = '';
  type = '';

  constructor( private route : ActivatedRoute , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.getlimit()
    this.route.params.subscribe(routeParams => {
        var type = routeParams['type'];
        this.type = routeParams['type'];
        console.log(type);
        if(type == 'approved')
        this.getPortalOrders(this.page,'admin-approved','');
        else if(type == 'pending')
        this.getPortalOrders(this.page,'admin-pending','');
      });
  }

    filter(type)
    {
      if(type == 'approved')
      {
        this.orderFilter = 'approved';
        this.getPortalOrders(this.page,'admin-approved','');
      }
      else if(type == 'pending')
      {
        this.orderFilter = 'pending';
        this.getPortalOrders(this.page,'admin-pending','');
      }
    }

    getPortalOrders(page,type,id)
    {
      if( this.searchText  == '')
      var text = 'all';
      else
      var text = this.searchText;

      this.storeLoading = true;
      this._sp.getPortalOrders(type,id,text,page,this.perpage).subscribe(
        data => {
          if(data.status == 200)
          {
            this.storeLoading = false;
            this.Orders       = data.data.data;
            this.TotalOrders       = data.data.total;
          }
        }
        ,
        err => {
          if(err.status == 409)
          {
            this.storeLoading = false;
            this.Orders       = [];
          }
        }
      );
    }

    downloadPdf(orderNo)
    {
      console.log(myGlobals.baseUrl);
        window.location.href = myGlobals.baseUrl+'api/download-order-pdf/'+orderNo;

        setTimeout(function(){
          if(this.type == 'approved')
          this.getPortalOrders(this.page,'admin-approved','');
          else if(this.type == 'pending')
          this.getPortalOrders(this.page,'admin-pending','');
         }, 3000);
    }

    deleteConfirm(i)
    {
      this.storeToDelete = i;
      jQuery('#deleteModal').modal('show');
    }

    ship(i,orderTrackNumber)
    {
      if(orderTrackNumber != '')
      {
        this.TrackNumber = orderTrackNumber;
      }
      this.orderToShip = i;
      jQuery('#shipModal').modal('show');
    }

    updateTrackNumber(i)
    {
      var value         = {};
      value['orderNumber']       = this.orderToShip;
      value['orderTrackNumber']       = this.TrackNumber;
      value['type']     = 'orderTrackNumber';
      this._sp.update(value).subscribe(
        data => {
          if(data.success)
          {
            this.toasterService.pop('success',data.data,'');
            jQuery('#shipModal').modal('hide');
            this.orderToShip = '';
            this.getPortalOrders(this.page,'admin-approved','');
          }
        },
        err => console.log(err)
      );
    }

    deleteOrder()
    {
      var value         = {};
      value['id']       = this.storeToDelete;
      value['type']     = 'order';
      this._sp.delete(value).subscribe(
        data => {
          if(data.success)
          {
            this.toasterService.pop('success',data.data,'');
            jQuery('#deleteModal').modal('hide');
            this.storeToDelete = '';
            this.getPortalOrders(this.page,'admin-approved','');
          }
        },
        err => console.log(err)
      );
    }

    Search(page)
    {
      if(this.orderFilter == 'approved')
      {
        this.getPortalOrders(page,'admin-approved','');
      }
      else if(this.orderFilter == 'pending')
      {
        this.getPortalOrders(page,'admin-pending','');
      }
      return page;
    }

    getlimit()
    {
      this._sp.getlimit().subscribe(
        data => {
          if(data.success)
          {
            this.limit250 = data.limit;
          }
        },
        err => console.log(err)
      );
    }

    updateLimitStatus(val)
    {
      if(this.limit250 == val)
      return false;
      // this.limit250 = (this.limit250 == 1 ? 0 : 1);

      var value               = {};
      value['type']          = 'PriceLimit';
      value['setStatus']     = val;
      this._sp.update(value).subscribe(
        data => {
          if(data.success)
          {
            this.toasterService.pop('success',data.data,'');
            this.limit250 = val;
          }
        },
        err => console.log(err)
      );

    }




}
