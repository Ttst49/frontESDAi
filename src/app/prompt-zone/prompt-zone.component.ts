import {Component, inject} from '@angular/core';
import {PromptService} from "../prompt.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-prompt-zone',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './prompt-zone.component.html',
  styleUrl: './prompt-zone.component.css'
})
export class PromptZoneComponent {

  promptService:PromptService = inject(PromptService)
  prompt!:string

  sendPrompt(prompt:string){
    this.promptService.sendAPrompt(prompt)
  }

}
