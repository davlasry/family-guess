import { QuestionKeys } from 'src/app/data/questions-keys';

export interface Question {
  text: string;
  filterFunction: (Person) => boolean;
  key: string;
  toRemoveIfYes?: string[];
  toRemoveIfNo?: string[];
  higherOrderQuestion?: QuestionKeys;
}
