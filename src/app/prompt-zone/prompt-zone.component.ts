import {Component, inject} from '@angular/core';
import {PromptService} from "../prompt.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-prompt-zone',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './prompt-zone.component.html',
  styleUrl: './prompt-zone.component.css'
})
export class PromptZoneComponent {


  promptService:PromptService = inject(PromptService)
  prompt!:string
  response:string = "Envoyez un prompt d'abord"

  sendPrompt(prompt:string){
    this.promptService.sendAPrompt(prompt).subscribe({
      next:(responseFromPrompt:any)=>{
        this.response = responseFromPrompt.response
        console.log(responseFromPrompt)
      }
    })
  }
}
