import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Introduction} from "../../data/introduction";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  titleText: string;
  logoClass: string;
  introduction: Introduction | undefined;

  constructor(private apiService: ApiService) {
    this.titleText = "Introduction";
    this.logoClass = "fa-solid fa-home";
  }

  ngOnInit(): void {
    this.getIntroduction();
  }


  getIntroduction() {
    this.apiService.getIntroduction().subscribe({
      next: (data) => {
        this.introduction = new Introduction(data);
        console.log(this.introduction)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
