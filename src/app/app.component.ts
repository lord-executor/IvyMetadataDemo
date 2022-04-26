import { Component, Inject } from '@angular/core';
import { AppNameToken } from './sample.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(@Inject(AppNameToken) public readonly title: string) {}
}
