import { Component, OnInit,AfterViewInit , ElementRef ,ViewChild } from '@angular/core';
declare var jQuery: any;
import {ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { XlsxToJsonService } from '../xlsx-to-json-service';
import { SuperadminService }    from '../superadmin.service';
declare let plupload: any;
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-spsidebar',
  templateUrl: './spsidebar.component.html',
  styleUrls: ['./spsidebar.component.css'],
  providers: [SuperadminService]
})


export class SpsidebarComponent implements OnInit {

  StoreImports = [];
  private toasterService: ToasterService;
  private xlsxToJsonService: XlsxToJsonService = new XlsxToJsonService();
  ConSheetChunks = [];
  ConSheetErrors = [];
  conImportStarted : boolean = false;

  subscription: any;
  uploader: any;
  fileList: any[] = [];
  isPluploadReady = false;
  @ViewChild('pickfiles') pickfiles: ElementRef;

  constructor ( toasterService: ToasterService , private _sp: SuperadminService)
  {
    this.toasterService = toasterService;
  }

  hideModal()
  {
    this.fileList = [];
    jQuery('#modal').modal('hide');
  }

  ngOnInit()
  {
    this.subscription = this.addPlupload();
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  addPlupload()
  {
    return this.addPluploadScript()
      .subscribe(() => {
        this.isPluploadReady = true;
        this.initPlupload();
      });
  }

  addPluploadScript(): Observable<any>
  {
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
initPlupload()
{
  var thiss  =this;
  //console.log('initPlupload -- this.pickfiles.nativeElement', this.pickfiles.nativeElement);

  this.uploader = new plupload.Uploader({
    runtimes : 'html5,html4',
    browse_button : this.pickfiles.nativeElement,
    url : 'https://www.productprotectionsolutions.com/order/api/upload-file',
    // url : 'http://localhost/dibcase/api/upload-file',
    // url : 'https://httpbin.org/post',
    chunk_size: '5000kb',
    multi_selection : false,
    max_retries: 3,
    filters : {
      max_file_size : '1000mb',
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
        jQuery('#modal').modal('show'),
        this.uploader.start()
      );
      },
      FileUploaded: function(up, file,result) {
        console.error(file);
        var json = JSON.parse(result.response);
        console.error(json);
        console.error(thiss);

        for(let i in thiss.fileList)
        {
          console.log(i);
          console.log(file.id);
          console.log(thiss.fileList[i]['id']);
          if(file.id == thiss.fileList[i]['id'])
          thiss.fileList[i]['link']  = json.url;
        }
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

removeMailAttachment(i)
{
  this.uploader.removeFile(this.fileList[i]['id']);
  this.fileList.splice(i,1);
}

  ngAfterViewInit ()
  {
    console.log(jQuery);
    jQuery('[data-play="dropdown"]').click(function(){
      jQuery(this).parent('.nav-dropdown').toggleClass('open');
    })
  }

  importStores(action,event = null)
  {
    this.ConSheetErrors = [];
    if(action == 'openfile')
    jQuery('#excelfile').click();
    else if(action  == 'handlefile')
    {
      this.StoreImports = [];
      let file = event.target.files[0];
      event.target.value = '';
      var error = false;

      var arr = ["storeName","storeClass","storeEmail","storeMobile","storeAddress","storeCity","storeState","storeZip","userName","userEmail","userPassword"];

      if ((file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'xls') && (file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'xlsx') && (file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'csv'))
      {
        this.toasterService.pop('error', 'Please select valid excel file' );
      }
      else
      {
        console.log('fdsfs')
        this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
          this.StoreImports = [];

          var keys = Object.keys(data['sheets']);
          console.log(data);
          console.log(keys);

          for (let i = 0; i < keys.length; i++)
          {
            var sheet = data['sheets'][keys[i]];

            for (let j = 0; j < sheet.length; j++)
            {
              var row = sheet[j];
              var keys2 = Object.keys(row);
              for (let k = 0; k < keys2.length; k++)
              {
                if(arr.indexOf(keys2[k]) == -1)
                {
                  delete row[keys2[k]];
                }
              }
              this.StoreImports.push(row);
            }
          }
         console.log(this.StoreImports);
          jQuery('#importStores').modal('show');

        });
      }
      jQuery('#importStores').modal('show');
    }
    else if(action  == 'importFile')
    {
      var inputs = jQuery('#importStores').find('input.required');
      var error = false;
      for (let i = 0; i < inputs.length; i++)
      {
          var input = inputs[i];
          if(input.value == '')
          {
            error = true;
            jQuery(input).addClass('input-error');
          }
          else
          {
            jQuery(input).removeClass('input-error');
          }
      }
      console.log(error);
      if(error)
      return false;

      this.conImportStarted = true;
      var toast: Toast = {
        type: 'info',
        title: 'Importing...',
        timeout: 0
      }

      this.toasterService.clear();
      this.toasterService.pop(toast);

      var i,j,temparray,chunk = 2;
      this.ConSheetChunks = [];
      for (i=0,j = this.StoreImports.length; i<j; i+=chunk)
      {
          this.ConSheetChunks.push(this.StoreImports.slice(i,i+chunk));
      }
      this.chunkUpload();
    }
  }



  chunkUpload()
  {
    let loop = (index: number, array) => {
      let data = {};
      data['data']         = array;
      for (let variable of array)
      {
        var keys = Object.keys(variable);
        for(var i = 0; i < keys.length ;i++)
        {
          // variable[keys[i]]
          if (variable[keys[i]].indexOf('&') > -1)
          {
              var searchStr = "&";
              var replaceStr = "%26";
              var re = new RegExp(searchStr, "g");
              var resultnew = variable[keys[i]].replace(re, replaceStr);
          }
          else
          {
              var resultnew = variable[keys[i]];
          }
          variable[keys[i]] = resultnew;
        }
      }

       this._sp.StoreImports(data)
         .subscribe((result) => {
           var ok       = 0;
           var notok    = 0;
           var already  = 0;
           var msg = '';
           console.log(result);
           this.ConSheetErrors = this.ConSheetErrors.concat(result.response);

           var idd = index+1;
           if ( this.ConSheetChunks[idd] !== void 0 )
           loop(idd,this.ConSheetChunks[idd])

           if(idd == (this.ConSheetChunks.length - 1))
           {
             for(var i = 0; i < this.ConSheetErrors.length ; i++)
             {
               if( this.ConSheetErrors[i] == 0)
               ok++;
               else if( this.ConSheetErrors[i] == 1)
               notok++;
               else if( this.ConSheetErrors[i] == 2)
               already++;
             }

             if(notok != 0 || already != 0)
             {
               msg = ok+' imported, '+notok+' Failed, '+already+' Already Imported';
             }
             this.ConSheetChunks = [];
             this.toasterService.clear();
             this.toasterService.pop('success', 'Contacts Import Completed,'+msg );
            //  jQuery('#import-contacts').modal('hide');
             this.conImportStarted = false;
           }
       })
     }
     loop(0,this.ConSheetChunks[0]);
   }


  removeStoreImport(index)
  {
    this.StoreImports.splice(index,1);
  }

  Sample()
  {
    window.location.href = 'http://productprotectionsolutions.com/order/store.xlsx';
  }

  uploadCatalog()
  {

  }

}
