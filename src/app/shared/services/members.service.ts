import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject  } from 'rxjs';
import { Members } from '../models/members';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MembersService {



constructor(private http: HttpClient) { }
static getMembers: any;

private membersURL = '/assets/data/members.json';
private memberSource = new BehaviorSubject('');
chosenMember = this.memberSource.asObservable();


arrayMembers: Members[] = [];
memberSubject = new Subject<Members[]>();


  emitMembers() {
    this.memberSubject.next(this.arrayMembers.slice());
  }

  // ** GET members */
  getMembers(): Observable<Members[]> {
    return this.http.get(this.membersURL).pipe(
      map((data: Members[]) => this.arrayMembers = data)
    );
  }

  /** GET member */
 public getMember(member: any) {
    this.memberSource.next(member);
  }


  /** Add New Member */
  addMember(member: Members) {
    this.arrayMembers.push(member);
    this.emitMembers();
  }






}




