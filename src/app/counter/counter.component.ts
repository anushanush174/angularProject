import { AppCounterService } from './../services/app-counter.service';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(private appCounterService: AppCounterService) { }
}