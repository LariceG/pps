import { Component, OnInit , ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ElementRef, AfterViewInit } from '@angular/core';
import { AbstractControl , FormArray , FormControl , FormBuilder, FormGroup , Validators } from '@angular/forms';
import { FormService }    from './form.service';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
declare var jQuery: any;
import {ToasterModule, ToasterService , Toast} from 'angular2-toaster';
declare let plupload: any;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {

  users : FormGroup;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  idleStart = false;
  FroalaData = "";
  private toasterService: ToasterService;

  editor: any;
  // editorOptions = {
  //   events: {
  //     'froalaEditor.initialized': (e, editor) => {
  //       console.log('initialized');
  //       this.editor = editor;
  //     }
  //   },
  //   key : "QF4F4C3B17hC7D6D5D5D2E3C2C6A6B6cdhh1i1evcA6kfg=="
  // };


  public editorOptions: Object = {
    placeholder: "Edit Me",
    events : {
      'froalaEditor.focus' : function(e, editor) {
        editor.events.bindClick(jQuery('body'), '.add', function (ee) {
          editor.html.insert(jQuery(ee.currentTarget).attr('dd'));
        });
      }
    },
    key : "QF4F4C3B17hC7D6D5D5D2E3C2C6A6B6cdhh1i1evcA6kfg=="
  }


    subscription: any;
    // Reference to the plupload instance.
    uploader: any;
    // Files being uploaded.
    fileList: any[] = [];
    // Flag to display the uploader only once the library is ready.
    isPluploadReady = false;
    // Reference to the `pickfiles` element
    // so we can bind plupload's "browse_button" to it.
    @ViewChild('pickfiles') pickfiles: ElementRef;
    thiss : any

  constructor( toasterService: ToasterService  , private router: Router , private fb: FormBuilder , private formservice: FormService , private idle: Idle, private keepalive: Keepalive )
  {
    this.toasterService = toasterService;

    this.users = fb.group({
      'name' : ['',Validators.required],
      'email' : [''],
    });


    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5000);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(20);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() =>
    {
      this.idleStart = false;
      this.idleState = 'No longer idle.';
      jQuery('#iDLeModal').modal('hide');
    }
    );

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      jQuery('#iDLeModal').modal('hide');
      localStorage.removeItem('dbcse_token');
      this.router.navigate(['/login']);

    });
    idle.onIdleStart.subscribe(
      () =>
      {
        this.idleStart = true;
        this.idleState = 'You\'ve gone idle!';
        jQuery('#iDLeModal').modal('show');
      }
    );

    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will be logged out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);
    //
    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    //
    // this.reset();

    this.idle.watch();

  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }


  ngOnInit()
  {
    this.subscription = this.addPlupload();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addPlupload() {
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
var thiss  =this;
  //console.log('initPlupload -- this.pickfiles.nativeElement', this.pickfiles.nativeElement);

  this.uploader = new plupload.Uploader({
    runtimes : 'html5,html4',
    browse_button : this.pickfiles.nativeElement,
    url : 'https://httpbin.org/post',
    chunk_size: '20000kb',
    multi_selection : false,
    max_retries: 3,
    filters : {
      max_file_size : '1000mb',
      mime_types: [
        {title : "Pdf files", extensions : "pdf"}
      ]
    },

    init: {
      PostInit: () => {
        // Reset the list of files being uploaded.
        this.fileList = [];
      },

      /**
       * Every time a file is selected, it's added to a list of files
       * displayed in the template with the regular Angular template syntax.
       */
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
        console.error(file);
        var json = $.parseJSON(result.response);
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

uploadFiles() {
  this.uploader.start();
}

  handleIt(value)
  {
  //  console.log(value);
    this.formservice.add(value).subscribe(
      data => {
    //    console.log(data);
      },
      err => console.log(err)
   );

  }

  destroytoken()
  {
    localStorage.removeItem('dbcse_token');
    this.router.navigate(['/login']);
  }


  addTag(a)
  {
        this.editor.html.insert('Some Custom HTML.');
    // this.ckeditor.instance.insertText(a);
  }

  cksave()
  {
    var value = {};
    value['data'] = this.FroalaData;
    this.formservice.templatedummy(value).subscribe(
      data => {
        var popup = window.open('about:blank' , '_blank');
        if(popup)
        popup.location.href  = data.link;
        else
        this.toasterService.pop('error', 'Popup Blocked, Allow to download pdf' , '' );
      },
      err => console.log(err)
   );

  }

}
