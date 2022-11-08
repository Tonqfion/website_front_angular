import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  titleText: string;
  logoClass: string;

  constructor() {
    this.titleText = "Formation";
    this.logoClass = "fa-solid fa-graduation-cap";
  }

  ngOnInit(): void {
  }

}
