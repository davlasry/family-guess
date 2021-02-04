import { Person } from 'src/app/data/person';
import { Sex } from 'src/app/data/sex';
import { Countries } from 'src/app/data/countries';

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
    text: 'Do I have or had an older sister?',
    filterFunction: (person: Person) => person.hasOlderSister,
    key: 'older_sister'
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
  },
  {
    text: 'Do I have an older brother?',
    filterFunction: (person: Person) => person.hasOlderBrother,
    key: 'older_brother'
  },
  {
    text: 'Do I have a younger brother?',
    filterFunction: (person: Person) => person.hasYoungerBrother,
    key: 'younger_brother'
  },
  {
    text: 'Am I married?',
    filterFunction: (person: Person) => person.isMarried,
    key: 'is_married'
  },
  {
    text: 'Was I born in Morocco?',
    filterFunction: (person: Person) => person.birthCountry === Countries.MOROCCO,
    key: 'is_married'
  }
];

