import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getAllExperiences() {
    const url = environment.API_URL + 'experiences';
    return this.httpClient.get(url);
  }

  getAllCompanies() {
    const url = environment.API_URL + 'companies';
    return this.httpClient.get(url);
  }

  getIntroduction() {
    const url = environment.API_URL + 'introduction';
    return this.httpClient.get(url);
  }
}
