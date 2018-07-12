import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';


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
  perpage = 5;
  page = 1;
  totalItem;
  storeLoading : boolean = false;
  storeToDelete;
  searchText = '';


  constructor( private route : ActivatedRoute , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.route.params.subscribe(routeParams => {
        var type = routeParams['type'];
        console.log(type);
        if(type == 'approved')
        this.getPortalOrders('admin-approved','');
      });
  }


    getPortalOrders(type,id)
    {
      if( this.searchText  == '')
      var text = 'all';
      else
      var text = this.searchText;

      this.storeLoading = true;
      this._sp.getPortalOrders(type,id,text).subscribe(
        data => {
          if(data.status == 200)
          {
            this.storeLoading = false;
            this.Orders       = data.data;
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
        window.location.href = 'https://productprotectionsolutions.com/order/api/download-order-pdf/'+orderNo;
    }

    deleteConfirm(i)
    {
      this.storeToDelete = i;
      jQuery('#deleteModal').modal('show');
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
            this.getPortalOrders('admin-approved','');
          }
        },
        err => console.log(err)
      );
    }

    Search(event)
    {
      this.getPortalOrders('admin-approved','');
    }





}
