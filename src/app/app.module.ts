import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IntroductionComponent} from './components/section/introduction/introduction.component';
import {ExperiencesComponent} from './components/section/experiences/experiences.component';
import {SkillsComponent} from './components/section/skills/skills.component';
import {TrainingComponent} from './components/section/training/training.component';
import {ProjectsComponent} from './components/section/projects/projects.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SectionTitleComponent} from './components/commons/section-title/section-title.component';
import {HttpClientModule} from "@angular/common/http";
import {
  UniqueExperienceComponent
} from './components/section/experiences/unique-experience/unique-experience.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {BodyComponent} from "./components/body/body.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MarkdownModule} from "ngx-markdown";
import { DateContainerComponent } from './components/commons/date-container/date-container.component';

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
    UniqueExperienceComponent,
    SidenavComponent,
    BodyComponent,
    DateContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
