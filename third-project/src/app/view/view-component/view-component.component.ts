import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent {

  userName : String = "";
  response! : any; 

  constructor(private http: HttpClient) {
  }

  search(){
    let obs = this.http.get('https://api.github.com/users/' + this.userName);
    obs.subscribe((response) => {
      this.response = response;
      console.log(response);
    });

  }

}
