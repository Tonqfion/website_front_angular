import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  titleText: string;
  logoClass: string;
  skills: any[] = [];

  constructor(private apiService: ApiService) {
    this.titleText = "Compétences";
    this.logoClass = "fa-solid fa-screwdriver-wrench";
  }

  ngOnInit(): void {
    this.getAllUserSkills();
  }

  getAllUserSkills() {
    this.apiService.getAllUserSkills().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
