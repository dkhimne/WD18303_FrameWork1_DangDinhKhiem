import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',      //cach 1 , va phải có file component.html và thẻ <router-outlet></router-outlet>
  // template: '<router-outlet></router-outlet>', //cach 2
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Lab2';

  
}
