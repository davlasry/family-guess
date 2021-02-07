import { EyesColor } from 'src/app/data/eyes-color';
import { Sex } from 'src/app/data/sex';
import { Countries } from 'src/app/data/countries';

export interface Person {
  name: string;
  firstName: string;
  images: string[];
  age: number;
  eyesColor: EyesColor;
  isHuman: boolean;
  isMarried: boolean;
  hasChildren: boolean;
  hasGlasses: boolean;
  sex: Sex;
  speaksFrench: boolean;
  livesJerusalem: boolean;
  hasGreatChildren: boolean;
  hasYoungerSister: boolean;
  hasOlderSister: boolean;
  hasYoungerBrother: boolean;
  hasOlderBrother: boolean;
  birthCountry: Countries;
  residenceCountry: Countries;
  isGrandGrandParent: boolean;
  childrenNumber?: number;
  hasLongEars?: boolean;
}
