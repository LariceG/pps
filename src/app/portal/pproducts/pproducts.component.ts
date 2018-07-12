import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {HttpModule, Http,Response} from '@angular/http';
import { PortalService }    from '../portal.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-pproducts',
  templateUrl: './pproducts.component.html',
  styleUrls: ['./pproducts.component.css'],
  providers: [PortalService]
})


export class PproductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
