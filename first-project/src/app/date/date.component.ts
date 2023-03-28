import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent  implements OnInit {

  dateMessage: string;
  someNumber: number = 10; 

  constructor() {

    setInterval(() => {
      let currenDate = new Date();
      this.dateMessage = currenDate.toDateString() + '  ' + currenDate.toLocaleTimeString();
    } , 1000);

    let currenDate = new Date();
    this.dateMessage = currenDate.toDateString() + '  ' + currenDate.toLocaleTimeString();

  }

  ngOnInit() {

  }

  addTwoNumbers(a: number, b: number){
    return a + b;
  }

  someOtherMethod(){
    this.addTwoNumbers(this.someNumber, 10);
  }

}
