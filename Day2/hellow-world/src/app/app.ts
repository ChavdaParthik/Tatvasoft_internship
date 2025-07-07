import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Form} from "./form/form"


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
