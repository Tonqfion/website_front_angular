import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.scss']
})
export class DateContainerComponent implements OnInit {
  startDate?: string;
  endDate?: string;

  @Input()
  completeStartDate?: string;

  @Input()
  completeEndDate?: string;

  constructor() {
  }

  ngOnInit(): void {
    this.convertCompleteDatesToString();
  }

  convertCompleteDatesToString(): void {

    if (this.completeStartDate != undefined) {
      const startDate = new Date(this.completeStartDate);
      this.startDate = this.convertDateToString(startDate);
    } else {
      this.startDate = "JAN. 1970";
    }
    let endDate = new Date();
    if (this.completeEndDate != undefined) {
      endDate = new Date(this.completeEndDate);
    }
    this.endDate = this.convertDateToString(endDate);
  }

  convertDateToString(date: Date): string {
    const month = date.toLocaleString('default', {month: '2-digit'}).toUpperCase();
    const year = date.toLocaleString('default', {year: 'numeric'});
    return month + "/" + year;
  }
}
