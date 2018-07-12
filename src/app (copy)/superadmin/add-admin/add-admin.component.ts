import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
  providers: [SuperadminService]
})

export class AddAdminComponent implements OnInit {
  private toasterService: ToasterService;
  addAdmin 	: FormGroup;
  adminSubmission : boolean = false;
  CatList = [];
  CatListFull = [];
  catName;
  catLoading : boolean = false;
  subCatLoading : boolean = false;

  productImage = '';
  productImagePath = '';
  showImageUploading	: boolean 	= false;
  responseStatus2:Object	= [];
	public showhidemsg2	   	= false;
  @ViewChild('fileInput') fileInput: ElementRef;
  catSubmission : boolean = true;

  catToEdit;
  catToDelete;
  catEdit:boolean = false;


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
      userName : ['',[Validators.required]],
      userEmail : ['',[Validators.required]],
      userPassword : ['',[Validators.required]],
    }
    );
  }

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.catEdit = false;
    });

  }


  submitAdmin(v)
  {

    this.adminSubmission = true;

    if( !this.addAdmin.valid )
    {
      return false;
    }

    v['userType']   = 4;
    v['userStatus'] = 1;

    this._sp.submitAdmin(v).subscribe(
      response => {
        if(response.success)
        {
          this.toasterService.pop('success',response.data,'');
          this.adminSubmission = false;
          this.addAdmin.reset();
        }
        else
        {
        }
      },
      err => {
	       console.log(err);
        if(err.status == 409)
        {
          this.toasterService.pop('error', JSON.parse(err._body).data, '' );
        }
        else
        this.toasterService.pop('error', 'Something wrong,try again', '' );

      }
    );
    }

}
