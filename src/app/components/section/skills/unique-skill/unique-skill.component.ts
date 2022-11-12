import {Component, Input, OnInit} from '@angular/core';
import {UserSkillListResponseDataItem} from "../../../../api/models/user-skill-list-response-data-item";

@Component({
  selector: 'app-unique-skill',
  templateUrl: './unique-skill.component.html',
  styleUrls: ['./unique-skill.component.scss']
})
export class UniqueSkillComponent implements OnInit {

  @Input()
  skill?: UserSkillListResponseDataItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
