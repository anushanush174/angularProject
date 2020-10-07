import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  search = ""
  posts: Post[] = [
    {title: 'beer', text: 'the best beer in the world'},
    {title: 'bread', text: 'the best bread in the world'},
    {title: 'Javascript', text: 'the best language in the world'},
  ]
}
