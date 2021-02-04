import { EyesColor } from 'src/app/data/eyes-color';

export interface Person {
  name: string;
  age: number;
  eyesColor: EyesColor;
  isHuman: boolean;
  isFamilyMember: boolean;
  isMarried: boolean;
  hasChildren: boolean;
}

export const people: Person[] = [
  {
    name: 'David',
    age: 30,
    eyesColor: EyesColor.GREEN,
    isHuman: true,
    isFamilyMember: true,
    isMarried: true,
    hasChildren: true,
  },
  {
    name: 'Caro',
    age: 33,
    eyesColor: EyesColor.BROWN,
    isHuman: true,
    isFamilyMember: true,
    isMarried: true,
    hasChildren: true,
  },
  {
    name: 'Bamboo',
    age: 6,
    eyesColor: EyesColor.GREEN,
    isHuman: false,
    isFamilyMember: false,
    isMarried: false,
    hasChildren: false,
  },
  {
    name: 'Eva',
    age: 0,
    eyesColor: EyesColor.BROWN,
    isHuman: true,
    isFamilyMember: true,
    isMarried: false,
    hasChildren: false,
  }
];
