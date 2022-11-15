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
  trainings?: TrainingListResponseDataItem[];
  errorMessage?: string;

  constructor(private trainingsService: TrainingService) {
    this.titleText = "Formation";
    this.logoClass = "fa-solid fa-graduation-cap";
  }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings() {
    this.trainingsService.getTrainings().subscribe({
      next: (data) => {
        this.trainings = data.data;
      },
      error: (err) => {
        this.errorMessage = err.statusText;
      }
    })
  }
}
