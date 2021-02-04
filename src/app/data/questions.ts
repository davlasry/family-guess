import { Person } from 'src/app/data/person';
import { Sex } from 'src/app/data/sex';

export interface Question {
  text: string;
  filterFunction: (Person) => boolean;
  key: string;
}

export const questions: Question[] = [
  {
    text: 'Am I a human?',
    filterFunction: (person: Person) => person.isHuman,
    key: 'is_human'
  },
  {
    text: 'Do I have children?',
    filterFunction: (person: Person) => person.hasChildren,
    key: 'has_children'
  },
  // {
  //   text: 'Do I have green eyes?',
  //   filterFunction: (person: Person) => person.eyesColor === EyesColor.GREEN,
  //   key: 'has_green_eyes'
  // },
  {
    text: 'Am I older than 30?',
    filterFunction: (person: Person) => person.age > 30,
    key: 'age_30'
  },
  {
    text: 'Am I younger than 30 or 30?',
    filterFunction: (person: Person) => person.age <= 30,
    key: 'age_30'
  },
  {
    text: 'Am I a woman?',
    filterFunction: (person: Person) => person.sex === Sex.WOMAN,
    key: 'gender'
  },
  {
    text: 'Am I a man?',
    filterFunction: (person: Person) => person.sex === Sex.MAN,
    key: 'gender'
  },
  {
    text: 'Do I speak French?',
    filterFunction: (person: Person) => person.speaksFrench,
    key: 'speaks_french'
  },
  {
    text: 'Do I have or had a younger sister?',
    filterFunction: (person: Person) => person.hasYoungerSister,
    key: 'younger_sister'
  },
  {
    text: 'Do I live in Jerusalem?',
    filterFunction: (person: Person) => person.livesJerusalem,
    key: 'lives_jerusalem'
  },
  {
    text: 'Do I have great children?',
    filterFunction: (person: Person) => person.hasGreatChildren,
    key: 'has_great_children'
  }
];

