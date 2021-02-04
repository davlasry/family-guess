import { Component, OnInit } from '@angular/core';
import { Question, questions } from 'src/app/data/questions';
import { persons } from 'src/app/data/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  question: Question;
  questionsList = questions;
  persons = persons;
  pastQuestions = [];

  // isFound = false;

  ngOnInit(): void {
    this.initGame();
  }

  initGame(): void {
    this.questionsList = questions;
    this.question = this.getRandomQuestion();
    this.persons = persons;
  }

  onClickYes(): void {
    this.persons = this.persons.filter(this.question.filterFunction);
    this.afterQuestionAnswered();
    console.log(this.persons);
  }

  onClickNo(): void {
    this.persons = this.persons.filter((p) => !this.question.filterFunction(p));
    this.afterQuestionAnswered();
    console.log(this.persons);
  }

  getRandomQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * this.questionsList.length);
    return this.questionsList[randomIndex];
  }

  // private checkIfFound(): void {
  //   if (this.persons.length === 1) {
  //     this.isFound = true;
  //   }
  // }

  private afterQuestionAnswered(): void {
    this.questionsList = this.questionsList.filter(q => q.key !== this.question.key);
    if (this.questionsList) {
      this.question = this.getRandomQuestion();
    }
    // this.checkIfFound();
  }

}
