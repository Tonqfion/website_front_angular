import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BodyComponent} from './body/body.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {IntroductionComponent} from './section/introduction/introduction.component';
import {ExperiencesComponent} from './section/experiences/experiences.component';
import {SkillsComponent} from './section/skills/skills.component';
import {TrainingComponent} from './section/training/training.component';
import {ProjectsComponent} from './section/projects/projects.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SectionTitleComponent} from './commons/section-title/section-title.component';
import {HttpClientModule} from "@angular/common/http";
import { UniqueExperienceComponent } from './section/experiences/unique-experience/unique-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    IntroductionComponent,
    ExperiencesComponent,
    SkillsComponent,
    TrainingComponent,
    ProjectsComponent,
    SectionTitleComponent,
    UniqueExperienceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
