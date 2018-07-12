import { Component, OnInit , Input , EventEmitter , Output , ElementRef , ViewChild} from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-psidebar',
  templateUrl: './psidebar.component.html',
  styleUrls: ['./psidebar.component.css']
})
export class PsidebarComponent implements OnInit {
  @Input() token: object;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit ()
  {
    console.log(jQuery);
    jQuery('[data-play="dropdown"]').click(function(){
      jQuery(this).parent('.nav-dropdown').toggleClass('open');
    })
  }


}
