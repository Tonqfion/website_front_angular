import {Component, OnInit} from '@angular/core';
import {IntroductionService} from "../../../api/services/introduction.service";
import {IntroductionResponseDataObject} from "../../../api/models/introduction-response-data-object";

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

  isUndefinedIntro(): boolean {
    return this.introduction == undefined;
  }


  getIntroduction() {
    this.introductionService.getIntroductionsId({id: 1}).subscribe({
      next: (data) => {
        this.introduction = data.data;
        console.log(this.introduction);
      },
      error: (err) => {
      }
    })
  }
}
