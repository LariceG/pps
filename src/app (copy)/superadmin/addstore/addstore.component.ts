import { Component, OnInit } from '@angular/core';
import { ValidationErrors , AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';

function emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
}


@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrls: ['./addstore.component.css'],
  providers: [SuperadminService]
})

export class AddstoreComponent implements OnInit {
  private toasterService: ToasterService;
  storeAddTrue : boolean = false;
  addStore : FormGroup;
  asignCrendials: boolean = false;
  storeAdding : boolean = false;

  constructor( private router: Router , private _sp: SuperadminService , toasterService: ToasterService , private fb: FormBuilder)
  {
    this.toasterService = toasterService;
    this.addStore = fb.group({
      'storeName'     : ['',Validators.required],
      'storeEmail'    : ['',emailOrEmpty],
      'storeMobile'   : ['',[Validators.pattern('[0-9]*')]],
      'storeAddress'  : [''],
      'storeCity'     : [''],
      'storeState'    : [''],
      'storeZip'    : [''],
      'userName'     : ['',Validators.required],
      'userEmail'     : ['',Validators.email],
      'userPassword'     : ['',[Validators.required,Validators.min(6)]],
    });
  }

  ngOnInit()
  {
    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    console.log(tknn);

    this.addStore.controls['userName'].disable();
    this.addStore.controls['userEmail'].disable();
    this.addStore.controls['userPassword'].disable();

  }


  storeFormReset()
  {
  }

  submitStoreForm(value : any)
  {
    console.log('in Contr');
    this.storeAddTrue = true;
    if( !this.addStore.valid )
    {
      return false;
    }
    this.storeAdding = true;

    value['userType']   = 2;
    value['userStatus'] = 1;

    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    this._sp.addStore(value).subscribe(
      data => {
        if(data.success)
        {
          this.storeAddTrue = false;
          this.addStore.reset({
            storeName     : '',
            storeEmail    : '',
            storeMobile   : '',
            storeAddress  : '',
            storeCity     : '',
            storeState    : '',
            storeZip    : '',
            userName     : '',
            userEmail    : '',
            userPassword     : '',
          }
          );

          this.addStore.controls['userName'].disable();
          this.addStore.controls['userEmail'].disable();
          this.addStore.controls['userPassword'].disable();
          this.asignCrendials = false;

          this.toasterService.pop('success', data.data ,'' );
          this.storeAdding = false;
        }
      },
      err => console.log(err)
   );
  }

  asignCrendialsFun()
  {
    this.asignCrendials == true ? this.asignCrendials = false : this.asignCrendials = true
    if(this.asignCrendials == true)
    {
      this.addStore.controls['userName'].enable();
      this.addStore.controls['userEmail'].enable();
      this.addStore.controls['userPassword'].enable();
    }
    else
    {
      this.addStore.controls['userName'].disable();
      this.addStore.controls['userEmail'].disable();
      this.addStore.controls['userPassword'].disable();
    }

  }

}
