import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {TrainingListResponseDataItem} from "../../../../api/models/training-list-response-data-item";

@Component({
  selector: 'app-unique-training',
  templateUrl: './unique-training.component.html',
  styleUrls: ['./unique-training.component.scss']
})
export class UniqueTrainingComponent implements OnInit {
  schoolLogoUrl?: string;

  @Input()
  training?: TrainingListResponseDataItem;

  constructor() {
  }

  ngOnInit(): void {
    this.schoolLogoUrl = environment.BACKEND_URL + this.training?.attributes?.school?.data?.attributes?.schoolLogo?.data?.attributes?.url;
  }
}
