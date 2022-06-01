import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import swal from 'sweetalert2'; 
import { Question } from 'src/app/modals/question.modal';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions!: Array<Question>; 
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestion();
  }

  onDelete(questionId: string) {
    this.questionService.deleteQuestion(questionId);
  }

  onEdit(questionId: string) {
    const editQuestion = this.questionService.getSingleQuestion(questionId);
    swal.fire({
      title: "Edit Question",
      input: 'text',
      inputValue: editQuestion?.question,
      showCancelButton: true        
    }).then((question) => {
      if(question.isConfirmed) {
        this.questionService.editQuestion(editQuestion!.id, question.value)
      }
    });
  }

}
