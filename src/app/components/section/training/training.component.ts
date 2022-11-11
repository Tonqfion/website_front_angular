import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../../api/services/training.service";
import {TrainingListResponseDataItem} from "../../../api/models/training-list-response-data-item";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  titleText: string;
  logoClass: string;
  trainings: TrainingListResponseDataItem[] | undefined;

  constructor(private trainingsService: TrainingService) {
    this.titleText = "Formation";
    this.logoClass = "fa-solid fa-graduation-cap";
  }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings() {
    this.trainingsService.getTrainings({
      populate: 'school'
    }).subscribe({
      next: (data) => {
        this.trainings = data.data;
        console.log(this.trainings);
        if (this.trainings!!) {
          for (let training of this.trainings) {
            console.log(training.attributes?.school?.data?.attributes?.schoolLogo);
          }
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
