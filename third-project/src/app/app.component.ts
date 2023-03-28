import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //adding a constructor argument
  //if its Injectable then can 
  //add it via dependendy injection
  constructor(private svc: TestService, private http: HttpClient){
    //adding private automatically creates a private field of that type and name
    this.svc.printToConsole("Got the service");
  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/jamessat');
    obs.subscribe((response) => console.log(response)); 
  }


}
