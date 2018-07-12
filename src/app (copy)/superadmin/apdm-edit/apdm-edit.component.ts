import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
import { AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-apdm-edit',
  templateUrl: './apdm-edit.component.html',
  styleUrls: ['./apdm-edit.component.css'],
  providers: [SuperadminService]
})

export class ApdmEditComponent implements OnInit {
  apdmForm 	: FormGroup;
  apdmSubmission : boolean = false;
  apdmDetails = {};
  @Input() ApdmToEdit: string;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  isCredentials : boolean = false;

  constructor( private router: Router , private _sp: SuperadminService , private fb: FormBuilder)
  {
    this.apdmForm = this.fb.group({
      apdmFirstName : ['',[Validators.required]],
      apdmLastName : ['',[Validators.required]],
      apdmCity : ['',[Validators.required]],
      apdmEmail : ['',[Validators.email]],
      apdmMobileNo : ['',[Validators.pattern('[0-9]*')]],
      apdmAddress : [''],
      userPassword : ['',[Validators.required,Validators.min(6)]],
    }
    );
  }

  ngOnInit()
  {
    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    this.getapdmDetails(this.ApdmToEdit);
    this.apdmForm.controls['userPassword'].disable();
  }

  getapdmDetails(id)
  {
      this._sp.apdmDetails(id).subscribe(
        data => {
          this.apdmDetails = data.data;
        },
        err => console.log(err)
     );
  }

  ShowCredendtials()
  {
    this.isCredentials == true ? this.isCredentials = false : this.isCredentials = true;
    if(this.isCredentials)
    this.apdmForm.controls['userPassword'].enable();
    else
    this.apdmForm.controls['userPassword'].disable();
  }

  updateAdpm(value)
  {
    this.apdmSubmission = true;
    if(!this.apdmForm.valid)
    {
      return false;
    }
    value['userId']     = this.apdmDetails['apdmUserId'];

    this._sp.updateApdmUserDetail(value).subscribe(
      data => {
        if(data.success)
        {
          this.apdmSubmission = false;
          this.onSuccess.emit(data);
        }
      },
      err => console.log(err)
   );
  }



  }
