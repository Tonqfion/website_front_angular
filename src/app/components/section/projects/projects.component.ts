import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../api/services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  titleText: string;
  logoClass: string;
  projects: any[] = [];

  constructor(private projectService: ProjectService) {
    this.titleText = "Projets";
    this.logoClass = "fa-solid fa-code";
  }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
