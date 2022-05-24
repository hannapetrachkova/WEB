import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyTask} from "./entity/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uiapp';

  task: MyTask = new MyTask;

  constructor(private http: HttpClient) {
    this.http.get<MyTask>('https://lab3-pad-api.azurewebsites.net/').subscribe(result => {
      this.task = result;
    });
  }
}
