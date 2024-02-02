import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PromptZoneComponent} from "./prompt-zone/prompt-zone.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PromptZoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontIADigitalEvent';
}
