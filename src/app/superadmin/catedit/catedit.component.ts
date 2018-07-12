import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
import { AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-catedit',
  templateUrl: './catedit.component.html',
  styleUrls: ['./catedit.component.css'],
  providers: [SuperadminService]
})

export class CateditComponent implements OnInit {
  @Input() catToEdit: string;
  catUpdateTrue : boolean = false;
  updateCat : FormGroup;
  catDetails = {};
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  isCredentials : boolean = false;
  CatList = [];
  catSubmission  : boolean = false;

  showImageUploading	: boolean 	= false;
  responseStatus2:Object	= [];
	public showhidemsg2	   	= false;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor( private router: Router , private _sp: SuperadminService , private fb: FormBuilder)
  {
    this.updateCat = fb.group({
      catName : ['',[Validators.required]],
      catParent : ['0'],
      catDescription : ['',[Validators.required]]
    });
  }

  ngOnInit()
  {
    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    this.get('cat',this.catToEdit);
    this.getCats();
  }


  get(type,id)
  {
      this._sp.getWhere(type,id).subscribe(
        data => {
          if(type == 'cat')
          this.catDetails = data.data[0];
        },
        err => console.log(err)
     );
  }


  submitStoreForm(value : any)
  {
      this.catUpdateTrue = true;
      if( !this.updateCat.valid )
      {
        return false;
      }

      value['userId']   = this.catDetails['storeUserId'];

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

    getCats()
    {
      this._sp.getCats().subscribe(
        data => {
          if(data.success)
          this.CatList = data.data;
        },
        err => console.log(err)
     );
    }

    uploadCatImage()
    {
      let fi = this.fileInput.nativeElement;
      if (fi.files && fi.files[0])
      {
        this.showImageUploading	= true;
        this.showhidemsg2 		= true;
        let fileToUpload = fi.files[0];
        if (fileToUpload.type.indexOf('image') === -1)
        {
          this.responseStatus2['error_msg'] = 'Only images are allowed.';
          this.showImageUploading	= false;
          this.showhidemsg2 		= false;
        }
        this._sp.upload(fileToUpload).subscribe(
          response => {
            setTimeout(function() {
              this.showhidemsg2 = false;
            }.bind(this), 3000);
            this.showImageUploading = false;
            if(response.success)
            {
              this.catDetails['catImage'] 	= response.fileName;
            }
            else
            {
              this.responseStatus2['error_msg'] = response.error_msg;
            }
          },
          err => {
            this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
            this.showImageUploading		 	= false;
          }
        );
      }
    }

    submitCat(value)
    {
      this.catSubmission = true;
      if(!this.updateCat.valid)
      {
        return false;
      }
      value['catId']     = this.catToEdit;
      value['type']      = 'cat';
      value['catImage']  = this.catDetails['catImage'];
      this._sp.update(value).subscribe(
        data => {
          if(data.success)
          {
            this.onSuccess.emit(data);
          }
        },
        err => console.log(err)
     );
    }


  }
