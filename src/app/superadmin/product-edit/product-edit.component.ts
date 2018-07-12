import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
import { AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';

import { productVariationModel } from '../../shared/data-model';
declare let plupload: any;
import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/debounceTime';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [SuperadminService]
})

export class ProductEditComponent implements OnInit {
  private toasterService: ToasterService;
  @Input() ProductToEdit: string;
  productUpdateTrue : boolean = false;
  updateProduct : FormGroup;
  productDetails = {};
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  CatList = [];
  productSubmission  : boolean = false;
  productImage = '';
  productImagePath = '';
  showImageUploading	: boolean 	= false;
  responseStatus2:Object	= [];
	public showhidemsg2	   	= false;
  @ViewChild('fileInput') fileInput: ElementRef;
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

  productVariation = [];

  constructor( private router: Router , private _sp: SuperadminService , private fb: FormBuilder)
  {
    this.updateProduct = fb.group({
        productName : ['',[Validators.required]],
        productCode : ['',[Validators.required]],
        productCategory : ['',[Validators.required]],
        productDescription : [''],
        productPrice : ['',[Validators.required]],
        // productVariation : this.fb.array([this.initVariation()]),
    });
  }

  ngOnInit()
  {
    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    // this.get('cat',this.catToEdit);
    this.getCats();
    this.productDetailsFun(this.ProductToEdit);
    this.subscription = this.addPlupload();
  }


  productDetailsFun(id)
  {
      this._sp.productDetails(id).subscribe(
        data => {
          this.productDetails  = data.data;
          if(data.data['instructionFile'] != '' && data.data['instructionFile'] != null)
          this.fileList.push({ name :  data.data['instructionFile'] , percent : 100 });
          for (let i = 0; i < this.productDetails['classes'].length; i++)
          {
            this.productClasses [this.productDetails['classes'][i]['productClass']] = true;
          }
          this.productImage = data.data.productImage;
          if(data.data['productVariations'].length != 0)
          {
            for (let i = 0; i < data.data['productVariations'].length; i++)
            {
              delete data.data['productVariations'][i]['productVarID'];
              delete data.data['productVariations'][i]['productID'];
              delete data.data['productVariations'][i]['productVarStatus'];
            }
            this.productVariation =  data.data.productVariations;
            // this.setProdVars(data.data.productVariations)
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
    // var mmy = 'aa';
    // if(!mmy)
    // {
    //   console.log(this.updateProduct);
    //   return false;
    // }
    if(!this.updateProduct.valid)
    {
      error = true;
    }

    var inputs = jQuery('#pvar').find('input.required');
    var error = false;
    for (let i = 0; i < inputs.length; i++)
    {
        var input = inputs[i];
        if(input.value == '')
        {
          error = true;
          jQuery(input).addClass('is-invalid');
        }
        else
        {
          jQuery(input).removeClass('is-invalid');
        }
    }
    console.log(error);
    if(error)
    return false;


    value['productImage']     = this.productImage;
    value['productID']     = this.ProductToEdit;
    value['productDescription']     = this.productDetails['productDescription'];
    value['instructionFile']     = this.fileNameIns;
    value['productVariation']     = this.productVariation;

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
          console.log('filtered');
          this.productSubmission = false;
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


    initVariation()
    {
      return this.fb.group({
          'productVarItemId' : ['',Validators.required],
          'productVarPrice' : [''],
          'productVarItemQuantity' : [''],
          'productVarDesc' : ['',Validators.required],
      });
    }

    addVariation()
    {
      var obj = {};
      obj['productVarItemId'] = '';
      obj['productVarPrice'] = '';
      obj['productVarItemQuantity'] = '';
      obj['productVarDesc'] = '';
      this.productVariation.push(obj);
        // const control = <FormArray>this.updateProduct.controls['productVariation'];
        // control.push(this.initVariation());
    }

    removeVariation(i: number)
    {
      this.productVariation.splice(i,1);
        // const control = <FormArray>this.updateProduct.controls['productVariation'];
        // console.log(control);
        // console.log(i);
        // control.removeAt(i);
    }

    setProdVars(addresses: productVariationModel[])
    {
      const addressFGs = addresses.map(productVariationModel => this.fb.group(productVariationModel));
      const addressFormArray = this.fb.array(addressFGs);
      this.updateProduct.setControl('productVariation', addressFormArray);
      console.log(this.updateProduct.controls['productVariation']);
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
          this.fileList = [];
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
