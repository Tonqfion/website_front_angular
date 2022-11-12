import {Component, HostListener, OnInit} from '@angular/core';
import {IntroductionService} from "../../../api/services/introduction.service";
import {IntroductionResponseDataObject} from "../../../api/models/introduction-response-data-object";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  titleText: string;
  logoClass: string;
  isMobile: boolean = false;
  introduction?: IntroductionResponseDataObject;
  profilePictureLogoUrl?: string;

  constructor(private introductionService: IntroductionService) {
    this.titleText = "Introduction";
    this.logoClass = "fa-solid fa-home";
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
    this.getIntroduction();
  }

  isUndefinedIntro(): boolean {
    return this.introduction == undefined;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 768;
  }


  getIntroduction() {
    this.introductionService.getIntroductionsId({id: 1}).subscribe({
      next: (data) => {
        this.introduction = data.data;
        this.profilePictureLogoUrl = environment.BACKEND_URL + this.introduction?.attributes?.profilePicture?.data?.attributes?.url;
      },
      error: (err) => {
      }
    })
  }
}
