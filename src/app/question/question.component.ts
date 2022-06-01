import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  questions = this.questionService.getQuestion();

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

}
