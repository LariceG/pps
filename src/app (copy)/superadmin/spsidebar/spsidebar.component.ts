import { Component, OnInit,AfterViewInit  } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-spsidebar',
  templateUrl: './spsidebar.component.html',
  styleUrls: ['./spsidebar.component.css']
})
export class SpsidebarComponent implements OnInit {

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
