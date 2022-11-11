/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CompanyService } from './services/company.service';
import { ExperienceService } from './services/experience.service';
import { IntroductionService } from './services/introduction.service';
import { ProjectService } from './services/project.service';
import { SchoolService } from './services/school.service';
import { SkillService } from './services/skill.service';
import { SkillCategoryService } from './services/skill-category.service';
import { SkillSubCategoryService } from './services/skill-sub-category.service';
import { TrainingService } from './services/training.service';
import { UserSkillService } from './services/user-skill.service';
import { UploadFileService } from './services/upload-file.service';
import { UsersPermissionsUsersRolesService } from './services/users-permissions-users-roles.service';
import { UsersPermissionsAuthService } from './services/users-permissions-auth.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CompanyService,
    ExperienceService,
    IntroductionService,
    ProjectService,
    SchoolService,
    SkillService,
    SkillCategoryService,
    SkillSubCategoryService,
    TrainingService,
    UserSkillService,
    UploadFileService,
    UsersPermissionsUsersRolesService,
    UsersPermissionsAuthService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
