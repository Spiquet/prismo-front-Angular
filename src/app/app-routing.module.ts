import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MemberListComponent } from './pages/member-list/MemberListComponent';
import { ProfilComponent } from './pages/profil/profil.component';
import { FormComponent } from './components/form/form.component';
import { PageNotFoundComponent } from './components/404/page-not-found.component';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'welcome' },
{ path: 'welcome', component: WelcomeComponent},
{ path: 'members-list', component: MemberListComponent},
{ path: 'member/:id', component: ProfilComponent},
{ path: 'create-member', component: FormComponent,
},
{ path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
