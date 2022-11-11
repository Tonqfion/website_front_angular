import {Component, OnInit} from '@angular/core';
import {UserSkillService} from "../../../api/services/user-skill.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  titleText: string;
  logoClass: string;
  skills: any[] = [];

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
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
