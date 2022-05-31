import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys = this.surveyService.getSurvey();

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

}
