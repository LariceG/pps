import { Component, OnInit , AfterViewInit} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lisstore',
  templateUrl: './lisstore.component.html',
  styleUrls: ['./lisstore.component.css'],
  providers: [SuperadminService]
})

export class LisstoreComponent implements OnInit {
  private toasterService: ToasterService;
  stores : object = [];
  storeToEdit;
  storeEdit : boolean = false;
  perpage = 5;
  page = 1;
  totalItem;
  storeLoading : boolean = false;
  storeToDelete;

  constructor( private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.listStores(1);
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.storeEdit = false;
    });
  }

  listStores(e)
  {
    this.storeLoading = true;
    var value = {};
    value['perpage'] = this.perpage;
    value['page'] = e;

      this._sp.listStores(value).subscribe(
        data => {
          var thiss = this;
           setTimeout(function(){
             thiss.stores = data.data.result;
             thiss.totalItem = data.data.total_rows;
             thiss.storeLoading = false;
           }, 500);
        },
        err => {
          if(err.status == 409)
          {
            this.stores = [];
            this.totalItem = 0;
            this.storeLoading = false;
          }
        }
     );
     return e;
  }

  editStore(storeId)
  {
    this.storeToEdit = storeId;
    jQuery('#updateModal').modal('show');
    this.storeEdit = true;
  }

  handleStoreUpdate(event)
  {
    if(event.success)
    {
      this.storeToEdit = '';
      this.toasterService.pop('success', event.data ,'' );
      jQuery('#updateModal').modal('hide');
      this.listStores(1);
      this.storeEdit = false;
    }
  }

  updaetPerPage(a)
  {
    this.perpage = a;
    this.listStores(1);
  }

  deleteStoreConfirm(store)
  {
    this.storeToDelete = store;
    jQuery('#deleteModal').modal('show');
  }

  deleteStore()
  {
    var value       = {}
    value['id']     = this.storeToDelete;
    value['type']   = 'store';
    this._sp.delete(value).subscribe(
      data => {
        if(data.success)
        {
          this.listStores(1);
          jQuery('#deleteModal').modal('hide');
          this.storeToDelete = '';
        }
      },
      err => console.log(err)
    );
  }

}
