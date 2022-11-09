import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Experience} from "../../data/experience";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  titleText: string;
  logoClass: string;
  experiences: any[] = [];

  constructor(private apiService: ApiService) {
    this.titleText = "Expériences";
    this.logoClass = "fa-solid fa-briefcase";
  }

  ngOnInit(): void {
    this.getAllExperiences();
  }


  getAllExperiences() {
    this.apiService.getAllExperiences().subscribe({
      next: (data) => {
        const responseArray: any[] = data.data;
        console.log(responseArray)
        for (let experienceResponse of responseArray) {
          console.log(experienceResponse.attributes.jobTitle);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
