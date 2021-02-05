import { Component, OnInit } from '@angular/core';
import { Question, questions } from 'src/app/data/questions';
import { persons } from 'src/app/data/person';
import { filterQuestionsDeps } from 'src/app/utils/filter-deps';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  question: Question;
  questionsList = questions;
  persons = persons;
  pastQuestions = [] as Question[];

  // isFound = false;

  get isNotFound(): boolean {
    return this.persons?.length === 0 || (!this.questionsList?.length && this.persons.length > 0);
  }

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('he');

    translate.addLangs(['en', 'he']);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('he');
  }

  ngOnInit(): void {
    this.initGame();
  }

  initGame(): void {
    this.questionsList = questions;
    console.log('QUESTIONS LIST ', this.questionsList);

    this.question = this.getRandomQuestion();

    console.log('QUESTION', this.question.text);

    this.pastQuestions = [this.question];
    this.persons = persons;
  }

  onClickYes(): void {
    console.log('ANSWER YES');

    this.persons = this.persons.filter(this.question.filterFunction);
    this.afterQuestionAnswered('yes');
    console.log('PERSONS ', this.persons);
  }

  onClickNo(): void {
    console.log('ANSWER NO');

    this.persons = this.persons.filter((p) => !this.question.filterFunction(p));
    this.afterQuestionAnswered('no');
    console.log('PERSONS ', this.persons);
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

  private afterQuestionAnswered(answer: 'yes' | 'no'): void {
    this.questionsList = filterQuestionsDeps(this.questionsList, this.question, answer);
    // this.questionsList = this.questionsList.filter(q => q.key !== this.question.key);

    console.log('QUESTIONS LIST ', this.questionsList);

    if (this.questionsList) {
      this.question = this.getRandomQuestion();
      console.log('QUESTION', this.question.text);
      this.pastQuestions.push(this.question);
    }
    // this.checkIfFound();
  }

}
