import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../Common/GlobalConstants";

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private http: HttpClient) {

  }
  headers = {
    'Content-Type': 'application/json'
  }
  sendAPrompt(prompt:string){
    let body = {
      model:"openchat",
      prompt:prompt,
      stream:false
    }

    return this.http.post(GlobalConstants.baseUrl,body,{headers: this.headers})
  }
}
