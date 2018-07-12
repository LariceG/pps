import { Component, OnInit , ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup , Validators , ValidationErrors} from '@angular/forms';
declare var jQuery: any;
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { PortalService }    from '../portal.service';
function passwordMatcher( c : AbstractControl )
{
	console.log(c.get('password').value);
	return c.get('password').value === c.get('user_password_rpt').value
		? null : { 'nomatch' : true };
}



@Component({
  selector: 'app-paccount-settings',
  templateUrl: './paccount-settings.component.html',
  styleUrls: ['./paccount-settings.component.css'],
  providers: [PortalService]
})


export class PaccountSettingsComponent implements OnInit {
  account 	: FormGroup;
  private toasterService: ToasterService;
  submitAttempt: boolean = false;
  token = {};

  constructor(public fb: FormBuilder, private router: Router , toasterService: ToasterService , private _service: PortalService)
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

  showPassword(ele)
  {
  	var type = jQuery(ele).prev('input').attr('type');
  	if(type == 'password')
  	{
  		jQuery(ele).html('Hide');
  		jQuery(ele).prev('input').attr('type','text');
  	}
  	else
  	{
  		jQuery(ele).html('Show');
  		jQuery(ele).prev('input').attr('type','password');
  	}
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

	 logout()
   {
     localStorage.removeItem("ppsPortalToken");
     this.router.navigate(['/customer-login']);
   }


}
