import { LocalCounterService } from './services/local-counter.service';
import { AppCounterService } from './services/app-counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalCounterService],
})
export class AppComponent {
  constructor(
    private appCounterService: AppCounterService,
    private localCounterService: LocalCounterService
    ){
  }
}