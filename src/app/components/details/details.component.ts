import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Subscription } from 'rxjs';
import { Members } from '../../shared/models/members';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

MemberAPI: Members = null;
Members: Members[] = null;
subscriptions: Subscription;
@Input() member: any;






constructor(
  private router: Router,
  private apiService: ApiService,
  private route: ActivatedRoute ) { }

ngOnInit(): void  {


  // this.SelectMember();
  this.getMemberAPI();
}


// From API
getMemberAPI() {

  this.subscriptions = this.route.params.subscribe(params => {
    // tslint:disable-next-line: no-string-literal
    this.apiService.getMemberById(params['id']).subscribe( (res) => {
      this.MemberAPI = res.data;
    });
  });
}


// do not forget to "unsubscribe()" on Component Destroy
  // to prevent memory leak with Subscription
 ngOnDestroy() {
 this.subscriptions.unsubscribe();
  }

// from JSON
// SelectMember() {
//  this.memberService.chosenMember.subscribe(member => this.member = member);
// }


goBack(): void {
this.router.navigate(['/members-list']);
}
}
