import { Component, OnInit , AfterViewInit , ElementRef , ViewChild } from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';
declare let plupload: any;
import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/debounceTime';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [SuperadminService]
})

export class AddproductComponent implements OnInit {
  private toasterService: ToasterService;
  ProducForm 	: FormGroup;
  productSubmission : boolean = false;
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
  productDescription;
  productClasses = {};

  subscription: any;
  uploader: any;
  fileList: any[] = [];
  isPluploadReady = false;
  @ViewChild('pickfiles') pickfiles: ElementRef;
  // @ViewChild('pickk') pickk: ElementRef;
  thiss : any;
  UploadPending : boolean = false;
  Archived  = 0;
  browse    = 0;
  browsei   = 0;

  firstName = 'Name';
  modelChanged: Subject<string> = new Subject<string>();
  pickk = 'pickk';

  fileNameIns = '';


  constructor( public fb: FormBuilder , private router: Router , private _sp: SuperadminService , toasterService: ToasterService)
  {
    this.toasterService = toasterService;
    this.ProducForm = this.fb.group({
      productName : ['',[Validators.required]],
      productCode : ['',[Validators.required]],
      productCategory : ['',[Validators.required]],
      productPrice : ['',[Validators.required,Validators.pattern('[0-9]+([\.,][0-9]+)?')]],
      productVariation : this.fb.array([this.initVariation()]),
    }
    );
  }

  ngOnInit()
  {
    this.subscription = this.addPlupload();
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

  uploadproductImage()
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
            this.productImage 	= response.fileName;
            this.productImagePath 	= response.filePath;
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

  submitProduct(value)
  {
    this.productSubmission = true;
    if(!this.ProducForm.valid)
    {
      return false;
    }
    value['productImage']           = this.productImage;
    value['productDescription']     = this.productDescription;
    console.log(this.fileNameIns);
    value['instructionFile']     = this.fileNameIns;
    console.log(value);
    var keys = Object.keys(this.productClasses);

    var thiss = this;
    var filtered = keys.filter(function(key) {
        return thiss.productClasses[key]
    });
    console.log(filtered);
    value['productClasses']     = filtered;


    this._sp.submitProduct(value).subscribe(
      data => {
        if(data.success)
        {
          this.productSubmission = false;
          this.toasterService.pop('success', data.data ,'' );
          this.ProducForm.reset({ productCategory: '' });
          this.productClasses  = {};
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
    var value             = {};
    value['userId']       = this.catToDelete;
    value['caseStatment'] = 'usersTable';
    value['userStatus']   = 0;
    this._sp.deleteStore(value).subscribe(
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

  initVariation()
  {
    return this.fb.group({
        'productVarItemId' : ['',Validators.required],
        'productVarPrice' : ['',[Validators.required,Validators.pattern('[0-9]+([\.,][0-9]+)?')]],
        'productVarDesc' : ['',Validators.required],
        'productVarItemQuantity' : ['',Validators.required],
    });
  }

  addVariation()
  {
      const control = <FormArray>this.ProducForm.controls['productVariation'];
      control.push(this.initVariation());
  }

  removeVariation(i: number)
  {
      const control = <FormArray>this.ProducForm.controls['productVariation'];
      control.removeAt(i);
  }
  ngOnDestroy()
  {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

  addPlupload() {
    console.log('addupload')
    return this.addPluploadScript()
      .subscribe(() => {
        this.isPluploadReady = true;
        this.initPlupload();
      });
  }

  addPluploadScript(): Observable<any> {
    const id = 'plupload-sdk';
    // Return immediately if the script tag is already here.
    if (document.getElementById(id)) { return Observable.of(true) }
    let js, fjs = document.getElementsByTagName('script')[0];
    js = document.createElement('script'); js.id = id;
    js.src = "//unpkg.com/plupload@2.3.2/js/plupload.full.min.js";
    fjs.parentNode.insertBefore(js, fjs);
    return Observable.timer(1000).take(1);  // @TODO: Replace this with more robust code
  }

  // Configure and initialize Plupload.
  initPlupload() {
  var thiss  = this;
  //console.log('initPlupload -- this.pickfiles.nativeElement', this.pickfiles.nativeElement);

  this.uploader = new plupload.Uploader({
    runtimes : 'html5,html4',
    browse_button : 'pick',
    url : 'https://productprotectionsolutions.com/order/api/upload-file',
    chunk_size: '5000kb',
    multi_selection : false,
    max_retries: 3,
    filters : {
      max_file_size : '1000mb',
    },
    multipart_params : {
        "type" : "record_attachment",
        "id" : this.browse
    },
    init: {
      PostInit: () => {
        this.fileList = [];
      },
      FilesAdded: (up, files) => {
        plupload.each(files, (file) => {
          this.fileList.push({
            id: file.id,
            name: file.name,
            size: plupload.formatSize(file.size),
            percent: 0
          });
        },
        this.uploader.start()
      );
      },
      FileUploaded: function(up, file,result) {
        var json = JSON.parse(result.response);
        console.log(json.url);
        thiss.fileNameIns = json.url;
        console.log(thiss.fileNameIns);
      },
      // Update the upload progress in the list of files displayed in the template.
      UploadProgress: (up, file) => {
        const index = this.fileList.findIndex(f => f.id == file.id);
        this.fileList[index].percent = file.percent;
      },

      Error: (up, err) => {
        console.error(err);
      }
    }
  });

  this.uploader.init();
  }

  checkAttachmentProgress()
  {
    this.UploadPending = false;
    for(let i in this.fileList)
    {
      if(this.fileList[i]['percent'] != 100)
      this.UploadPending = true;
    }
  }


}
