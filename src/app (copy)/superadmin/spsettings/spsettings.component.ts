import { Component, OnInit , AfterViewInit} from '@angular/core';
declare var jQuery: any;
import { SuperadminService }    from '../superadmin.service';
import { ToasterModule, ToasterService , Toast} from 'angular2-toaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';

function passwordMatcher( c : AbstractControl )
{
	console.log(c.get('password').value);
	return c.get('password').value === c.get('user_password_rpt').value
		? null : { 'nomatch' : true };
}


@Component({
  selector: 'app-spsettings',
  templateUrl: './spsettings.component.html',
  styleUrls: ['./spsettings.component.css'],
  providers: [SuperadminService]
})


export class SpsettingsComponent implements OnInit {
  account 	: FormGroup;
  private toasterService: ToasterService;
  submitAttempt: boolean = false;
  token = {};


  constructor(public fb: FormBuilder, private router: Router , toasterService: ToasterService , private _service: SuperadminService)
  {
    this.toasterService = toasterService;
    this.account = this.fb.group({
      current_password : ['',[Validators.required,Validators.minLength(6)]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      user_password_rpt : ['',[Validators.required,Validators.minLength(6)]],
    },
		{      validator:passwordMatcher}
    );
  }

  ngOnInit()
  {
    var tokenn  = localStorage.getItem("ppsPortalToken");
    this.token   = JSON.parse(tokenn);
  }

  onSubmit(value: any,account )
	{
		this.submitAttempt = true;
		console.log(this.account);
		if(!this.account.valid)
			return false;

			let tkn    = localStorage.getItem('ppsPortalToken');
      var token  = JSON.parse(tkn);
			value['userId'] = token['userId'];

      this._service.chnagePassword(value).subscribe(
        data => {
          this.submitAttempt = false;
          if(data.success)
          {
              this.toasterService.pop('success', data.success_msg + '' );
  						this.account.reset()
          }
          if(data.success == false)
          {
              this.toasterService.pop('error', data.error_msg + '' );
          }
  			},
	     );
	 }


}
