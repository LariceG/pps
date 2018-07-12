import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css'],
  providers: [SuperadminService]
})

export class ListAdminsComponent implements OnInit {
  private toasterService: ToasterService;
  AdminList = [];
  Loading : boolean = false;
  adminEdit : boolean = false;
  page = 1;
  perpage = 10;
  total_rows;
  AdminToDelete;
  adminToEdit;

  constructor( public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
  }

  ngOnInit()
  {
    this.ListAdmin(1);
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.adminEdit = false;
    });
  }

  ListAdmin(e)
  {
    this.Loading = true;
      this._sp.ListAdmin(e,this.perpage).subscribe(
        data => {
          this.Loading = false;
          this.AdminList = data.data.result;
          this.total_rows = data.data.total_rows;
        },
        err => {
          this.Loading = false;
        }
     );
     return e;
   }

   editAdmin(admin)
   {
     this.adminToEdit = admin;
     this.adminEdit = true;
     jQuery('#updateModal').modal('show');
   }

   deleteAdminConfirm(i)
   {
     this.AdminToDelete = i;
     jQuery('#deleteModal').modal('show');
   }

   deleteAdmin()
   {
     var value         = {};
     value['id']       = this.AdminToDelete;
     value['type']     = 'admin';
     this._sp.delete(value).subscribe(
       data => {
         if(data.success)
         {
           this.toasterService.pop('success',data.data,'');
           jQuery('#deleteModal').modal('hide');
           this.AdminToDelete = '';
           this.ListAdmin(1);
         }
       },
       err => console.log(err)
     );
   }

   handleUpdate(e)
   {
     if(e.success)
     {
       this.ListAdmin(1);
       this.adminToEdit = '';
       this.adminEdit = false;
       this.toasterService.pop('success',e.data,'');
       jQuery('#updateModal').modal('hide');
     }
   }




}
