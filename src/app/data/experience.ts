import {Company} from "./company";

export class Experience {
  jobTitle: string;
  jobDescription: string;
  startDate: Date;
  endDate: Date;
  companyName: string;
  companyLogoUrl: string;

  constructor(experienceResponse: any) {
    this.jobTitle = experienceResponse.attributes.jobTitle;
    this.jobDescription = experienceResponse.attributes.jobDescription;
    this.startDate = new Date(experienceResponse.attributes.startDate);
    this.endDate = new Date(experienceResponse.attributes.endDate);
    this.companyName = experienceResponse.attributes.company.data.attributes.companyName;
    this.companyLogoUrl = experienceResponse.attributes.company.data.attributes.companyLogo.data.attributes.url;
  }
}
