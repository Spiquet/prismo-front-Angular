import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MemberListComponent } from './pages/member-list/MemberListComponent';
import { HttpClientModule } from '@angular/common/http';
import { BorderCardDirective } from './shared/directives/border.directive';
import { ProfilComponent } from './pages/profil/profil.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/details/details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/404/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    MemberListComponent,
    BorderCardDirective,
    ProfilComponent,
    ListComponent,
    FormComponent,
    DetailComponent,
    PageNotFoundComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
