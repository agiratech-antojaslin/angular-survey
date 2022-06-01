import { Injectable } from "@angular/core";
import { Question } from "../modals/question.modal";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'    
})
export class QuestionService {
    questions = [ new Question("q_8723", "During the last week, if any, has someone made fun of you, called you names, or insulted you?", true), new Question("q_2734", "During last week, if any, has someone spread rumors about you?", true) ];
    constructor(private http: HttpClient) {};
    getQuestion() {
        this.http
            .get("https://survey-form-44bf0-default-rtdb.firebaseio.com/questions.json")
            .pipe(map((responseData: { [key: string] : any }) => {
                const postData: Question [] = [];
                for(const key in responseData) {
                    if(responseData.hasOwnProperty(key)) {
                        postData.push({ ...responseData[key], key: key});
                        this.questions.push(responseData[key]);
                    }
                }
                return postData;
            }))
            .subscribe(posts => {
                
                console.log(posts);
            });
        return this.questions;
    }
    createQuestion(newQuestion: Question) {
        this.http
            .post("https://survey-form-44bf0-default-rtdb.firebaseio.com/questions.json", newQuestion)
            .subscribe((response) => {
                console.log(response);
            });
        //this.questions.push(newQuestion);
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