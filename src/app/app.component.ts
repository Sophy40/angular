import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 monthArray=['jan','feb','march','april','may']
 title="welcom to lab"

 appTitle=environment.appTitle;
 
 changeMonth(e){
   console.log(e.target.value)
 }
}
