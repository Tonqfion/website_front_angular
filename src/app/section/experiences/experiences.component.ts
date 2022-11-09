import {Component, OnInit} from '@angular/core';
import {ExperienceService} from "../../api/services/experience.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  titleText: string;
  logoClass: string;
  experiences: any[] = [];

  constructor(private experienceService: ExperienceService) {
    this.titleText = "Expériences";
    this.logoClass = "fa-solid fa-briefcase";
  }

  ngOnInit(): void {
    this.getAllExperiences();
  }


  getAllExperiences() {
    this.experienceService.getExperiences().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
