import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  titleText: string;
  logoClass: string;
  trainings: any[] = [];

  constructor(private apiService: ApiService) {
    this.titleText = "Formation";
    this.logoClass = "fa-solid fa-graduation-cap";
  }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings() {
    this.apiService.getAllTrainings().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
