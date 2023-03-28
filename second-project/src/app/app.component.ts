import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: string = "Initial Value";

  constructor(){
    this.user = new User();
    this.user.name = "James Bond";
    this.user.designation = "Software Developer";
    this.user.address = "22 Software Street, Main, USA";
    this.user.phone = [
      "123-4567-890",
      "234-444-6666",
      "5555-6666-7777"
    ];
  }
}


