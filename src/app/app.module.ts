import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { UsersComponent } from './users/users.component';
import { TitleComponent } from './shared/title/title.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './shared/popup/popup.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { SurveyListComponent } from './survey-form/survey-list/survey-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { QuestionComponent } from './question/question.component';
import { QuestionAddComponent } from './question/question-add/question-add.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ThankPageComponent } from './thank-page/thank-page.component';
import { QuestionService } from './services/question.service';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SurveyFormComponent,
    UsersComponent,
    TitleComponent,
    PopupComponent,
    UsersListComponent,
    SurveyListComponent,
    NotFoundComponent,
    QuestionComponent,
    QuestionAddComponent,
    AdminDashboardComponent,
    ThankPageComponent,
    QuestionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PopupComponent, AuthGuard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
