import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { UsersComponent } from './users/users.component';
import { TitleComponent } from './shared/title/title.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './shared/popup/popup.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'users', component: UsersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SurveyFormComponent,
    UsersComponent,
    TitleComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
