import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from 'src/app/data/questions';
import { PERSONS } from 'src/app/data/persons';
import { filterQuestionsDeps } from 'src/app/utils/filter-questions';
import { TranslateService } from '@ngx-translate/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  question: Question;
  questionsList = QUESTIONS;
  persons = PERSONS;
  pastQuestions = [] as Question[];

  get isNotFound(): boolean {
    return this.persons?.length === 0 || (!this.questionsList?.length && this.persons.length > 1);
  }

  get isFound(): boolean {
    return this.persons.length === 1;
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
    this.questionsList = QUESTIONS;
    console.log('QUESTIONS LIST ', this.questionsList);

    this.question = this.getRandomQuestion();

    console.log('QUESTION', this.question.text);

    this.pastQuestions = [this.question];
    this.persons = PERSONS;
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
    const pickedQuestion = this.questionsList[randomIndex];

    // TODO: make it recursive and switch with the highest order question
    // If there is a higher order question, pick that question
    if (pickedQuestion.higherOrderQuestion) {
      return this.questionsList?.find(q => q.key === pickedQuestion.higherOrderQuestion) || pickedQuestion;
    }

    return pickedQuestion;
  }

  onClickIDontKnow(): void {
    this.afterQuestionAnswered('none');
  }

  private afterQuestionAnswered(answer: 'yes' | 'no' | 'none'): void {
    if (answer === 'none') {
      // TODO: remove all questions that require the answer to this question
      this.questionsList = this.questionsList.filter(q => this.question.key !== q.key);
    } else {
      this.questionsList = filterQuestionsDeps(this.questionsList, this.question, answer, this.persons);
    }

    console.log('QUESTIONS LIST ', this.questionsList);

    if (this.questionsList?.length) {
      this.question = this.getRandomQuestion();
      console.log('QUESTION', this.question.text);
      this.pastQuestions.push(this.question);
    }
  }
}
