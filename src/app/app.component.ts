import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding_prj';
  txt = 'Hi';
  dist = false;
  diab = true;

dis(va:boolean){
  if( va == true ){

this.diab = true;
  }

  else if( va == false ) {
    this.diab = false;
  }


}


  
}
