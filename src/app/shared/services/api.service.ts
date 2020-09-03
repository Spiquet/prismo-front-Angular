import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Members } from '../models/members';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000';


  public getAllMembers() {
    return this.http.get<any>(this.URL + '/members');
  }

  public getMemberById(id: number) {
    console.log(`fetched member id=${id}`);
    return this.http.get<any>(this.URL + '/member/' + id);

  }

  public register(member: Members) {
    return this.http.post(`${this.URL}/member`, member);
}






}
