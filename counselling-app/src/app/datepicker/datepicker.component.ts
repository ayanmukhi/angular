import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disabledDates = [
    new Date('2020-02-05'),
    new Date('2020-02-09')
  ];

}
