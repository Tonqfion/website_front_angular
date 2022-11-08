import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  titleText: string;
  logoClass: string;

  constructor() {
    this.titleText = "Compétences";
    this.logoClass = "fa-solid fa-screwdriver-wrench";
  }

  ngOnInit(): void {
  }

}
