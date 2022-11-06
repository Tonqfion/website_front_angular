import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  titleText: string;
  logoClass: string;

  constructor() {
    this.titleText = "Introduction";
    this.logoClass = "fa-solid fa-home";
  }

  ngOnInit(): void {
  }

}
