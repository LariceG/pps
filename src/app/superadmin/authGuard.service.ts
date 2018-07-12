import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class AuthGuardSuperAdmin implements CanActivate, CanActivateChild {

  canActivate()
    {
        if (localStorage.getItem("ppsSuperAdminToken") === null)
        {
          this.router.navigate(['/superadmin']);
        }
        else
        {
          return true;
        }
    }

  constructor( private router: Router ) { }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
