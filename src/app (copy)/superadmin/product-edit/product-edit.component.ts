import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
import { AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';

import { productVariationModel } from '../../shared/data-model';

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

  constructor( private router: Router , private _sp: SuperadminService , private fb: FormBuilder)
  {
    this.updateProduct = fb.group({
        productName : ['',[Validators.required]],
        productCode : ['',[Validators.required]],
        productCategory : ['',[Validators.required]],
        productDescription : [''],
        productPrice : ['',[Validators.required]],
        productVariation : this.fb.array([this.initVariation()]),
    });
  }

  ngOnInit()
  {
    let tkn = localStorage.getItem('ppsSuperAdminToken');
    let tknn = JSON.parse(tkn);
    // this.get('cat',this.catToEdit);
    this.getCats();
    this.productDetailsFun(this.ProductToEdit);
  }


  productDetailsFun(id)
  {
      this._sp.productDetails(id).subscribe(
        data => {
          this.productDetails = data.data;
          this.productImage = data.data.productImage;
          this.setProdVars(data.data.productVariations)
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
    if(!this.updateProduct.valid)
    {
      return false;
    }
    value['productImage']     = this.productImage;
    value['productID']     = this.ProductToEdit;
    value['productDescription']     = this.productDetails['productDescription'];

    this._sp.submitProduct(value).subscribe(
      data => {
        if(data.success)
        {
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
          'productVarDesc' : ['',Validators.required],
      });
    }

    addVariation()
    {
        const control = <FormArray>this.updateProduct.controls['productVariation'];
        control.push(this.initVariation());
    }

    removeVariation(i: number)
    {
        const control = <FormArray>this.updateProduct.controls['productVariation'];
        control.removeAt(i);
    }

    setProdVars(addresses: productVariationModel[])
    {
      const addressFGs = addresses.map(productVariationModel => this.fb.group(productVariationModel));
      const addressFormArray = this.fb.array(addressFGs);
      this.updateProduct.setControl('productVariation', addressFormArray);
      console.log(this.updateProduct.controls['productVariation']);
    }


  }
