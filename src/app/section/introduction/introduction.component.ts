import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Introduction} from "../../data/introduction";
import {IntroductionService} from "../../api/services/introduction.service";
import {IntroductionResponse} from "../../api/models/introduction-response";
import {IntroductionResponseDataObject} from "../../api/models/introduction-response-data-object";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  titleText: string;
  logoClass: string;
  introduction?: IntroductionResponseDataObject;

  constructor(private introductionService: IntroductionService) {
    this.titleText = "Introduction";
    this.logoClass = "fa-solid fa-home";
  }

  ngOnInit(): void {
    this.getIntroduction();
  }

  isUndefined(): boolean {
    return this.introduction != undefined;
  }


  getIntroduction() {
    this.introductionService.getIntroductionsId({id: 1}).subscribe({
      next: (data) => {
        this.introduction = data.data;
      },
      error: (err) => {
      }
    })
  }
}
