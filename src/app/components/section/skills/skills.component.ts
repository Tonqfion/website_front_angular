import {Component, OnInit} from '@angular/core';
import {UserSkillService} from "../../../api/services/user-skill.service";
import {UserSkillListResponseDataItem} from "../../../api/models/user-skill-list-response-data-item";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  titleText: string;
  logoClass: string;
  skills?: UserSkillListResponseDataItem[];

  constructor(private userSkillService: UserSkillService) {
    this.titleText = "Compétences";
    this.logoClass = "fa-solid fa-screwdriver-wrench";
  }

  ngOnInit(): void {
    this.getAllUserSkills();
  }

  getAllUserSkills() {
    this.userSkillService.getUserSkills().subscribe({
      next: (data) => {
        this.skills = data.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
