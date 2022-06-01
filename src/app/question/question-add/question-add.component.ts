import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/modals/question.modal';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {
  questionId: number = Math.floor(1000 + Math.random() * 9000);
  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(questionForm: any) {
    const formData = questionForm.value;
    const question_obj = new Question("q_"+this.questionId, formData.question, true);
    this.questionService.createQuestion(question_obj);
    this.router.navigate(["questions"]);
  }

}
