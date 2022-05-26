import { Survey } from "../modals/survey.modal";
import { Injectable } from '@angular/core';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class SurveyService {
    surveys = [new Survey(4445, "true", "true", "true", "true", 100, true)];
    createSurvey(newSurvey: Survey) {
        this.surveys.push(newSurvey);
        console.log(this.surveys);
    }
}