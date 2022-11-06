import {Company} from "./company";

export interface Experience {
  jobTitle: string;
  jobDescription: string;
  startDate: Date;
  endDate: Date;
  company: Company;
}
