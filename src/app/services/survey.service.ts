import { Survey } from "../modals/survey.modal";
import { Injectable } from '@angular/core';    
import { PopupComponent } from "../shared/popup/popup.component";
    
@Injectable({    
  providedIn: 'root'    
})    
export class SurveyService {
    surveys = [new Survey(4445, "true", "true", "true", "true", 100, true)];
    constructor(private popup: PopupComponent) {}
    createSurvey(newSurvey: Survey) {
        this.surveys.push(newSurvey);
        console.log(this.surveys);
        this.popup.openModal = true;
    }
}