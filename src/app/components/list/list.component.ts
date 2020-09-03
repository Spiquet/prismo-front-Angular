import { Component, OnInit, Input } from '@angular/core';
import { Members } from '../../shared/models/members';
import { MembersService } from '../../shared/services/members.service';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [  // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        query(':leave', stagger('300ms', [
          animate('500ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ]),

    // Trigger animation for plus button
    trigger('plusAnimation', [

      // Transition from any state to any state
      transition('* => *', [
        query('.plus-card', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.plus-card', stagger('500ms', [
          animate('300ms 1.1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
      ])
    ])]

})
export class ListComponent implements OnInit {

  @Input() member: any;
  members: Members[] = null;
  membersApi: Members[];

  // memberSubscription: Subscription;




constructor(private membersService: MembersService, private apiService: ApiService, private router: Router,
                 ) {}


ngOnInit() {this.SelectMembersFromAPI();
    }


// From JSON
// SelectMembers() {
//  this.membersService.getMembers().subscribe(data =>  ( this.members = data));
//
// }



   // From API
   SelectMembersFromAPI() {
    this.apiService.getAllMembers().subscribe((res) => {
      this.membersApi = res.data;
    });
   }

   // Select a member for more details
   selectMember(member: any): void {
    this.membersService.getMember(member);
    this.router.navigateByUrl('/member/' + member.id);

  }



}





