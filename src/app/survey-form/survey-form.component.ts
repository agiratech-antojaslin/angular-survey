import { Component, OnInit } from '@angular/core';
import { Survey } from '../modals/survey.modal';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  userId: number = Math.floor(1000 + Math.random() * 9000);
  // surveyForm = this.formBuilder.group({
  //   question_1: false,
  //   question_2: false,
  //   question_3: false,
  //   question_4: false
  // });

  createSurvey: boolean = false;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  onSubmit(surveyForm: any) {
    if(surveyForm.status == 'INVALID') {
      
    };
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
  }

}
