import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  titleText: string;
  logoClass: string;

  constructor() {
    this.titleText = "Projets";
    this.logoClass = "fa-solid fa-code";
  }

  ngOnInit(): void {
  }

}
