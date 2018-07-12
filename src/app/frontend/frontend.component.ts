import { Component, OnInit } from '@angular/core';
import { FrontendService }    from './frontend.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
  providers: [FrontendService]
})

export class FrontendComponent implements OnInit {

  settings = {};
  constructor(private _front: FrontendService)
  {

  }

  ngOnInit()
  {
    this.getSettings();
  }

  getSettings()
  {
    this._front.getSettings().subscribe(
      data => {
        if(data.success)
        {
          for (let i = 0; i < data.data.length; i++)
          {
              this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
          }
          console.log(this.settings);
        }
      },
      err => console.log(err)
   );
  }

}
