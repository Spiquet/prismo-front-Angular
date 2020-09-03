import { Component, OnInit, Output } from '@angular/core';
import { Members } from '../../shared/models/members';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']

})
export class MemberListComponent implements OnInit {





constructor( private router: Router,
  ) {}


  ngOnInit() {

}




selectMember(member: Members): void {
  const link = ['/member', member.id];
  this.router.navigate(link);
}



}
