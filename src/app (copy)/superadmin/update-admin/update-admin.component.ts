import { Component, OnInit , AfterViewInit , ElementRef , ViewChild , Input , Output ,EventEmitter} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css'],
  providers: [SuperadminService]
})

export class UpdateAdminComponent implements OnInit {
  private toasterService: ToasterService;
  addAdmin 	: FormGroup;
  adminSubmission : boolean = false;
  Loading : boolean = false;
  @Input() admin: string;
  isCredentials : boolean = false;
  adminDetails = {};
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();


  constructor( public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
    this.addAdmin = this.fb.group({
      adminName : ['',[Validators.required]],
      adminEmail : ['',[Validators.required]],
      adminMobile : ['',[Validators.required,Validators.pattern('[0-9]*')]],
      adminAddress : [''],
      adminCity : ['',[Validators.required]],
      adminState : ['',[Validators.required]],
      adminZip : ['',[Validators.required]],
      adminCountry : [''],
      userPassword : [''],
    }
    );
  }

  ngOnInit()
  {
    this.getAdmin(this.admin);
  }

  ngAfterViewInit()
  {
  }

  getAdmin(admin)
  {
    this.Loading = true;
    this._sp.getAdminDetails(admin).subscribe(
      data => {
        this.Loading = false;
        this.adminDetails = data.data;
      },
      err => console.log(err)
   );
  }

  submitAdmin(v)
  {
    this.adminSubmission = true;

    if( !this.addAdmin.valid )
    {
      return false;
    }
    v['userId'] = this.admin;


    this._sp.updateAdmin(v).subscribe(
      response => {
        if(response.success)
        {
          this.onSuccess.emit(response);
        }
        else
        {
        }
      },
      err => {
      }
    );
    }

    ShowCredendtials()
    {
      this.isCredentials == true ? this.isCredentials = false : this.isCredentials = true;
      if(this.isCredentials)
      this.addAdmin.controls['userPassword'].enable();
      else
      this.addAdmin.controls['userPassword'].disable();
    }

}
