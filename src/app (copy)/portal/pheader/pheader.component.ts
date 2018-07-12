import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent implements OnInit {

  @Input() token: object;

  constructor(private router :  Router) { }

  ngOnInit()
  {

  }

  logout()
  {
    localStorage.removeItem("ppsPortalToken");
    this.router.navigate(['/portal']);
  }

}
