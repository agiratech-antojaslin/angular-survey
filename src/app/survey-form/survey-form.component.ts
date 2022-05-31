import { Component, OnInit } from '@angular/core';
import { Survey } from '../modals/survey.modal';
import { SurveyService } from '../services/survey.service';
import { Router,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import swal from 'sweetalert2'; 
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { CanComponentDeactivate, CanDeactivateGuard } from '../can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit, CanComponentDeactivate {

  userId!: number;
  answersSubmitted = false;
  formTitle!: string;
  // surveyForm = this.formBuilder.group({
  //   question_1: false,
  //   question_2: false,
  //   question_3: false,
  //   question_4: false
  // });

  createSurvey: boolean = false;

  constructor(private surveyService: SurveyService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.activatedRoute.params.subscribe( params => this.userId = params['id']);
    console.log(this.activatedRoute.snapshot.url[2].path);
    if(this.activatedRoute.snapshot.url[2].path != undefined) {
      this.formTitle = "Edit Survey";
    } else {
      this.formTitle = "Start Survey";
    }
    this.userId = this.activatedRoute.snapshot.params['id'];
  }

  onSubmit(surveyForm: any) {
    if(surveyForm.status == 'INVALID') {
      swal.fire({
        text: 'Please fill all the fields!', icon: 'error'
      });
    } else {
      const question_answers = surveyForm.value;
      const user_id = this.userId;
      let completed_questions = 0;
      if(question_answers.question_1 != '') {
        completed_questions ++;
      }
      if(question_answers.question_2 != '') {
        completed_questions ++;
      }
      if(question_answers.question_3 != '') {
        completed_questions ++;
      }
      if(question_answers.question_4 != '') {
        completed_questions ++;
      }
      
      const completed_percentage = Math.trunc((completed_questions / 4) * 100);
      let is_completed = false;
      if(completed_percentage == 100) {
        is_completed = true
      }
      const survey_obj = new Survey(user_id, question_answers.question_1, question_answers.question_2, question_answers.question_3, question_answers.question_4, completed_percentage, is_completed);
      this.surveyService.createSurvey(survey_obj);
      surveyForm.reset();
      this.createSurvey = true;
      swal.fire({
        text: 'Thank you for the participation!', icon: 'success', confirmButtonText:
        'OK',
      }).then(() => {
        this.answersSubmitted = true;
        this.router.navigate(["/"]);
      })
    }
  }

  canDeactivate() : boolean | Observable<boolean> | Promise<boolean> {
    if(!this.answersSubmitted) {
      return confirm("Do you want to exit?");
    } else {
      return true;
    }
  }

}
