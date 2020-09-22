import { Phrase } from './phrase';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

const PHRASES: Phrase[] = [
  {value: "hello world", language: "english"},
  {value: "privet mir", language: "russian"},
  {value: "privit sait", language: "ukrainian"},
  {value: "halo Mundo", language: "spanish"},
  {value: "barev ashxarh", language: "armenian"},
  {value: "ciao mondo", language: "italiaan"},
  {value: "bonjur le mode", language: "franch"}
]

@Component({
  selector: 'hello-world-list',
  templateUrl: './hello-world-list.component.html',
  styleUrls: ['./hello-world-list.component.css']
})

export class HelloWorldListComponent implements OnInit {
  phraseList: Phrase[] = PHRASES;
  selectedPhraseLanguage: string;

  onSelect(selected: Phrase){
    this.selectedPhraseLanguage = selected.language
  }

  ngOnInit(): void { }

}
