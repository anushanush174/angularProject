import { LogService } from './log.service';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
    constructor(private logService: LogService){

    }

    counter = 0

    increase(){
        this.logService.log('increase counter ...')
        this.counter++
    }

    decrease(){
        this.logService.log('decrease counter ...')
        this.counter--
    }
}