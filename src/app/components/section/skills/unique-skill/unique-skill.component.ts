import {Component, Input, OnInit} from '@angular/core';
import {UserSkillListResponseDataItem} from "../../../../api/models/user-skill-list-response-data-item";
import {environment} from "../../../../../environments/environment";
import {SkillSubCategoryListResponseDataItem} from "../../../../api/models/skill-sub-category-list-response-data-item";

@Component({
  selector: 'app-unique-skill',
  templateUrl: './unique-skill.component.html',
  styleUrls: ['./unique-skill.component.scss']
})
export class UniqueSkillComponent implements OnInit {

  skillLogoUrl?: string;
  skillSubCategories?: SkillSubCategoryListResponseDataItem[];

  @Input()
  skill?: UserSkillListResponseDataItem;

  constructor() {
  }

  ngOnInit(): void {
    this.skillSubCategories = this.skill?.attributes?.skill?.data?.attributes?.skillSubCategories?.data;
    this.skillLogoUrl = environment.BACKEND_URL + this.skill?.attributes?.skill?.data?.attributes?.skillLogo?.data?.attributes?.url;
  }

}
