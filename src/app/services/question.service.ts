import { Injectable } from "@angular/core";
import { Question } from "../modals/question.modal";

@Injectable({
    providedIn: 'root'    
})
export class QuestionService {
    questions = [ new Question("q_8723", "During the last week, if any, has someone made fun of you, called you names, or insulted you?", true), new Question("q_2734", "During last week, if any, has someone spread rumors about you?", true) ]
    getQuestion() {
        return this.questions;
    }
    createQuestion(newQuestion: Question) {
        this.questions.push(newQuestion);
    }
    deleteQuestion(deleteQuestion: string) {
        const index = this.questions.findIndex(user => user.id === deleteQuestion); 
        this.questions.splice(index, 1); 
    }
    getSingleQuestion(questionId: string) {
        const question = this.questions.find(user => user.id === questionId); 
        return question;
    }
    editQuestion(questionId: string, editedQuestion: string) {
        let question = this.questions.find(user => user.id === questionId); 
        question!.question = editedQuestion;
    }
}