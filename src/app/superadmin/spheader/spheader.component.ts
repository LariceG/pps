import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-spheader',
  templateUrl: './spheader.component.html',
  styleUrls: ['./spheader.component.css']
})
export class SpheaderComponent implements OnInit {

  constructor( private router: Router)
  {

  }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem("ppsSuperAdminToken");
    this.router.navigate(['/superadmin']);
  }

}
