import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../api/services/training.service";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  titleText: string;
  logoClass: string;
  trainings: any[] = [];

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
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
