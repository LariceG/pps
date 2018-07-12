import { Component, OnInit , AfterViewInit , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  providers: [SuperadminService]
})

export class CatsComponent implements OnInit {
  private toasterService: ToasterService;
  CatList = [];
  CatListFull = [];
  catName;
  catLoading : boolean = false;
  subCatLoading : boolean = false;

  catImage = '';
  catImagePath = '';
  showImageUploading	: boolean 	= false;
  responseStatus2:Object	= [];
	public showhidemsg2	   	= false;
  @ViewChild('fileInput') fileInput: ElementRef;
  catForm 	: FormGroup;
  catSubmission : boolean = true;

  catToEdit;
  catToDelete;
  catEdit:boolean = false;


  constructor( public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
    this.catForm = this.fb.group({
      catName : ['',[Validators.required]],
      catParent : ['0'],
      catDescription : ['',[Validators.required]]
    }
    );
  }

  ngOnInit()
  {
    // this.listStores(1);
    // this.get('mainCat');
    this.getCats();
  }

  ngAfterViewInit()
  {
    var thiss = this;
    jQuery('#updateModal').on('hidden.bs.modal', function () {
      thiss.catEdit = false;
    });

  }

  // addCat()
  // {
  //   if(this.catName == '')
  //   return false;
  //       var value         = {};
  //       value['data']     = { 'CategoryName' : this.catName };
  //       value['type']     = 'mainCat';
  //       this._sp.insert(value).subscribe(
  //         data => {
  //           this.CatList.push(this.catName);
  //           this.catName = '';
  //         },
  //         err => console.log(err)
  //      );
  // }

  removeCat(index,cat)
  {
    var value         = {};
    value['id']       = cat;
    value['type']     = 'mainCat';
    this._sp.delete(value).subscribe(
      data => {
        this.CatList.splice(index, 1);
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

  deleteStore()
  {
    var value             = {};
    // value['userId']       = this.storeToDelete;
    value['caseStatment'] = 'usersTable';
    value['userStatus']   = 0;
    this._sp.deleteStore(value).subscribe(
      data => {
        if(data.success)
        {
        }
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
            this.catImage 	= response.fileName;
            this.catImagePath 	= response.filePath;
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
    if(!this.catForm.valid)
    {
      return false;
    }
    value['catImage']     = this.catImage;
    this._sp.submitCat(value).subscribe(
      data => {
        if(data.success)
        {
          //this.catForm.reset();
          this.catForm.reset({ catParent: 0 });
          this.catImage = '';
          this.catImagePath = '';
          this.getCats();
        }
      },
      err => console.log(err)
   );
  }

  editCat(catId)
  {
    this.catToEdit = catId;
    jQuery('#updateModal').modal('show');
    this.catEdit = true;
  }

  deleteCatConfirm(cat)
  {
    this.catToDelete = cat;
    jQuery('#deleteModal').modal('show');
  }

  deleteCat()
  {
    var value       = {};
    value['id']     = this.catToDelete;
    value['type']   = 'cats';
    this._sp.delete(value).subscribe(
      data => {
        if(data.success)
        {
          jQuery('#deleteModal').modal('hide');
          this.catToDelete = '';
        }
      },
      err => console.log(err)
    );
  }

  handleCatUpdate(e)
  {
    if(e.success)
    {
      this.toasterService.pop('success', e.data ,'' );
      this.getCats();
      jQuery('#updateModal').modal('hide');
      this.catToEdit = '';
      this.catEdit = false;
    }
  }


}
