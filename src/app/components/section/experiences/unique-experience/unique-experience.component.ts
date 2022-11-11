import {Component, Input, OnInit} from '@angular/core';
import {ExperienceListResponseDataItem} from "../../../../api/models/experience-list-response-data-item";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-unique-experience',
  templateUrl: './unique-experience.component.html',
  styleUrls: ['./unique-experience.component.scss']
})
export class UniqueExperienceComponent implements OnInit {
  companyLogoUrl?: string;

  @Input()
  experience?: ExperienceListResponseDataItem;

  constructor() {
  }

  ngOnInit(): void {
    this.companyLogoUrl = environment.BACKEND_URL + this.experience?.attributes?.company?.data?.attributes?.companyLogo?.data?.attributes?.url;
  }

}
