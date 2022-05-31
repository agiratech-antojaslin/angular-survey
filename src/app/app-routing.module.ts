import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-form/survey-list/survey-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'survey/:id', component: SurveyFormComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'survey/:id/edit', component: SurveyFormComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'users/create', component: UsersComponent },
  { path: 'users', canActivate: [AuthGuard], component: UsersListComponent },
  { path: 'surveys', canActivate: [AuthGuard], component: SurveyListComponent },
  { path: 'users/edit/:id', component: UsersComponent },
  // { path: 'users', component: UsersListComponent, children: [
  //   { path: 'all', component: UsersListComponent },
  //   { path: 'create', component: UsersComponent },
  //   { path: 'edit/:id', component: UsersComponent }
  // ] }
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
