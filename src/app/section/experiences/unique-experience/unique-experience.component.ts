import {Component, Input, OnInit} from '@angular/core';
import {ExperienceListResponseDataItem} from "../../../api/models/experience-list-response-data-item";

@Component({
  selector: 'app-unique-experience',
  templateUrl: './unique-experience.component.html',
  styleUrls: ['./unique-experience.component.scss']
})
export class UniqueExperienceComponent implements OnInit {

  @Input()
  experience?: ExperienceListResponseDataItem;

  constructor() { }

  ngOnInit(): void {
  }

}
