import { trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts: Post[] = [
    {title: "want learn angular components",
      text: "still learning ...",
      id: 1,
    },
    {title: "next block",
      text: "about pipes and directives",
      id: 2,
    }
  ]
}