import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../Common/GlobalConstants";

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private http: HttpClient) {

  }
  sendAPrompt(prompt:string){
    console.log(prompt)
  }
}
