import {Component, OnInit} from '@angular/core';
import {ExperienceService} from "../../../api/services/experience.service";
import {ExperienceListResponseDataItem} from "../../../api/models/experience-list-response-data-item";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  titleText: string;
  logoClass: string;
  errorMessage?: string;
  experiences?: ExperienceListResponseDataItem[];

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
        this.experiences = data.data;
      },
      error: (err) => {
        this.errorMessage = err.statusText;
      }
    })
  }
}
