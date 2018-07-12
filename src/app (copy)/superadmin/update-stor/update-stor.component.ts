import { Component, OnInit , Input , EventEmitter , Output} from '@angular/core';
import { ValidationErrors , AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';


function emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
}


@Component({
  selector: 'app-update-stor',
  templateUrl: './update-stor.component.html',
  styleUrls: ['./update-stor.component.css'],
  providers: [SuperadminService]
})


export class UpdateStorComponent implements OnInit {
@Input() storeToEdit: string;
private toasterService: ToasterService;
storeUpdateTrue : boolean = false;
updateStore : FormGroup;
storeDetails = {};
@Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
isCredentials : boolean = false;
storeDetailsLoading : boolean = true;


constructor( private router: Router , private _sp: SuperadminService , toasterService: ToasterService , private fb: FormBuilder)
{
  this.toasterService = toasterService;
  this.updateStore = fb.group({
    'storeName'     : ['',Validators.required],
    'storeEmail'    : ['',emailOrEmpty],
    'storeMobile'   : ['',[Validators.pattern('[0-9]*')]],
    'storeAddress'  : [''],
    'storeCity'     : [''],
    'storeState'    : [''],
    'storeZip'    : [''],
    'userPassword'     : ['',[Validators.required,Validators.min(6)]],
  });
}

ngOnInit()
{
  let tkn = localStorage.getItem('ppsSuperAdminToken');
  let tknn = JSON.parse(tkn);
  this.storeDetail();
  this.updateStore.controls['userPassword'].disable();
}


storeDetail()
{
    this._sp.storeDetail(this.storeToEdit).subscribe(
      data => {
        this.storeDetails = data.data;
        this.storeDetailsLoading = false;
      },
      err => console.log(err)
   );
}


submitStoreForm(value : any)
{
  this.storeUpdateTrue = true;
  if( !this.updateStore.valid )
  {
    return false;
  }

  value['userId']   = this.storeDetails['storeUserId'];

  let tkn = localStorage.getItem('ppsSuperAdminToken');
  let tknn = JSON.parse(tkn);
  this._sp.updateStore(value).subscribe(
    data => {
      if(data.success)
      {
        this.onSuccess.emit(data);
      }
    },
    err => console.log(err)
  );
  }

  ShowCredendtials()
  {
    this.isCredentials == true ? this.isCredentials = false : this.isCredentials = true;
    if(this.isCredentials)
    this.updateStore.controls['userPassword'].enable();
    else
    this.updateStore.controls['userPassword'].disable();
  }

}
