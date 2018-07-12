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
  stores = [];
  storeToEdit;
  storeEdit : boolean = false;
  perpage = 5;
  page = 1;
  totalItem;
  storeLoading : boolean = false;
  storeToDelete;
  searchText = '';
  storeListevent = 1;
  storesBulk = [];

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
    this.storeListevent = e;
    this.storeLoading = true;
    var value = {};
    value['perpage'] = this.perpage;
    value['page'] = e;
    value['text'] = this.searchText;

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

  deleteStore2()
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

  Search()
  {
    this.listStores(1);
  }

  deleteee()
  {
    var thiss = this;
    jQuery('input:checkbox.storeChecks').each(function () {
      if(this.checked)
      {
        var atr = jQuery(this).attr('dd');
        if(atr)
        thiss.storesBulk.push(atr);
      }
      else
      {
        console.log('here');
        var atr = jQuery(this).attr('dd');
        if(atr)
        {
          var idx = thiss.storesBulk.indexOf(atr);
          if(idx != -1)
          {
            thiss.storesBulk.splice(idx,1);
          }
        }
      }

      });

      if(thiss.storesBulk.length == 0)
      {
        thiss.toasterService.pop('error', 'Please select atleast 1 store' ,'' );
      }
      else
      {
        jQuery('#deleteModal2').modal('show');
      }
  }

  bulkDelete()
  {
    var thiss = this;
    jQuery('input:checkbox.storeChecks').each(function () {
      if(this.checked)
      {
        var atr = jQuery(this).attr('dd');
        if(atr)
        thiss.storesBulk.push(atr);
      }
      else
      {
        console.log('here');
        var atr = jQuery(this).attr('dd');
        if(atr)
        {
          var idx = thiss.storesBulk.indexOf(atr);
          if(idx != -1)
          {
            thiss.storesBulk.splice(idx,1);
          }
        }
      }
      });

      if(thiss.storesBulk.length == 0)
      {
        thiss.toasterService.pop('error', 'Please select atleast 1 store' ,'' );
      }

    var value       = {}
    var searchValue = this.storesBulk.join('_');
    value['id']     = searchValue ;

    value['type']   = 'bulkStores';
    this._sp.delete(value).subscribe(
      data => {
        if(data.success)
        {
          this.listStores(1);
          jQuery('#deleteModal2').modal('hide');
          this.storesBulk = [];
        }
      },
      err => console.log(err)
    );
  }

  isAllChecked()
  {
    return this.stores.every(_ => _.state);
  }

  checkAll(ev)
  {
    this.stores.forEach(x => x.state = ev.target.checked)
    // var objj = jQuery('.storeChecks');
    // console.log(objj);
  }


  // check(type)
  // {
  //   if(type == 'all')
  //   {
  //     for(let store of this.stores)
  //     {
  //       console.log(store['storeUserId'])
  //     }
  //   }
  // }

}
