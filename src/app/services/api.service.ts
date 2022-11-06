import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getExperienceList() {
    const url = environment.API_URL + 'experiences?populate[0]=company&populate[1]=company.companyLogo';
    return this.httpClient.get(url);
  }
}
