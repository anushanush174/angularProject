import { Post } from './../app.component';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  ElementRef,
  ChangeDetectionStrategy,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges, 
  EventEmitter, 
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  OnDestroy {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', { static: true }) infoRef: ElementRef
  
  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit() {
    console.log(this.infoRef.nativeElement)
  }

}

