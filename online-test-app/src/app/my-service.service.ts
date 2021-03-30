import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AnswersDataModel } from './answers.model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(public http: HttpClient) { }

  getAnswers():Observable<AnswersDataModel[]>{
    return this.http.get<AnswersDataModel[]>('/assets/answers.json');
    
  }
}
