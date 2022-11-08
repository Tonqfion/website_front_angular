import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getIntroduction() {
    const url = environment.API_URL + 'introductions/1';
    return this.httpClient.get(url);
  }

  getAllExperiences() {
    const url = environment.API_URL + 'experiences';
    return this.httpClient.get(url);
  }

  getAllUserSkills() {
    const url = environment.API_URL + 'user-skills';
    return this.httpClient.get(url);
  }

  getAllTrainings() {
    const url = environment.API_URL + 'trainings';
    return this.httpClient.get(url);
  }

  getAllProjects() {
    const url = environment.API_URL + 'projects';
    return this.httpClient.get(url);
  }

  getAllCompanies() {
    const url = environment.API_URL + 'companies';
    return this.httpClient.get(url);
  }

  getAllSkills() {
    const url = environment.API_URL + 'skills';
    return this.httpClient.get(url);
  }
}
