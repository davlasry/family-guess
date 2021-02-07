import { Sex } from 'src/app/data/sex';
import { Countries } from 'src/app/data/countries';
import { EyesColor } from 'src/app/data/eyes-color';
import { QuestionKeys } from 'src/app/data/questions-keys';
import { Question } from 'src/app/interfaces/question';
import { Person } from 'src/app/interfaces/person';

export const QUESTIONS: Question[] = [
  /** HUMAN/ANIMAL */
  {
    text: 'Am I a human?',
    filterFunction: (person: Person) => person.isHuman,
    key: QuestionKeys.IS_HUMAN,
    toRemoveIfYes: [QuestionKeys.IS_ANIMAL],
    toRemoveIfNo: [QuestionKeys.IS_ANIMAL],
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  {
    text: 'Am I an animal?',
    filterFunction: (person: Person) => !person.isHuman,
    key: QuestionKeys.IS_ANIMAL,
    toRemoveIfYes: [QuestionKeys.IS_HUMAN],
    toRemoveIfNo: [QuestionKeys.IS_HUMAN],
    higherOrderQuestion: QuestionKeys.IS_MAN
  },
  /** EYES COLOR */
  {
    text: 'Do I have blue eyes?',
    filterFunction: (person: Person) => person.eyesColor === EyesColor.BLUE,
    key: QuestionKeys.EYES_BLUE,
    toRemoveIfYes: [QuestionKeys.EYES_GREEN],
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  {
    text: 'Do I have green eyes?',
    filterFunction: (person: Person) => person.eyesColor === EyesColor.GREEN,
    key: QuestionKeys.EYES_GREEN,
    toRemoveIfYes: [QuestionKeys.EYES_BLUE],
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  /** AGE */
  {
    text: 'Am I older than 30?',
    filterFunction: (person: Person) => person.age > 30,
    key: QuestionKeys.AGE_MORE_30,
    toRemoveIfYes: [QuestionKeys.AGE_30_OR_LESS]
  },
  {
    text: 'Am I younger than 30 (or 30)?',
    filterFunction: (person: Person) => person.age <= 30,
    key: QuestionKeys.AGE_30_OR_LESS,
    toRemoveIfYes: [QuestionKeys.AGE_MORE_30, QuestionKeys.IS_GRAND_PARENT, QuestionKeys.IS_GRAND_GRAND_PARENT]
  },
  /** SEX */
  {
    text: 'Am I a woman?',
    filterFunction: (person: Person) => person.sex === Sex.WOMAN,
    key: QuestionKeys.IS_WOMAN,
    toRemoveIfYes: [QuestionKeys.IS_MAN],
    toRemoveIfNo: [QuestionKeys.IS_MAN]
  },
  {
    text: 'Am I a man?',
    filterFunction: (person: Person) => person.sex === Sex.MAN,
    key: QuestionKeys.IS_MAN,
    toRemoveIfYes: [QuestionKeys.IS_WOMAN],
    toRemoveIfNo: [QuestionKeys.IS_WOMAN]
  },
  /** SPEAKS */
  {
    text: 'Do I speak French?',
    filterFunction: (person: Person) => person.speaksFrench,
    key: QuestionKeys.SPEAKS_FRENCH
  },
  /** SIBLINGS */
  {
    text: 'Do I have (or had) a younger sister?',
    filterFunction: (person: Person) => person.hasYoungerSister,
    key: QuestionKeys.HAS_YOUNGER_SISTER,
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  {
    text: 'Do I have (or had) an older sister?',
    filterFunction: (person: Person) => person.hasOlderSister,
    key: QuestionKeys.HAS_OLDER_SISTER,
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  {
    text: 'Do I have (or had) an older brother?',
    filterFunction: (person: Person) => person.hasOlderBrother,
    key: QuestionKeys.HAS_OLDER_BROTHER,
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  {
    text: 'Do I have (or had) a younger brother?',
    filterFunction: (person: Person) => person.hasYoungerBrother,
    key: QuestionKeys.HAS_YOUNGER_BROTHER,
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  /** CHILDREN */
  {
    text: 'Do I have one or more child?',
    filterFunction: (person: Person) => person.hasChildren,
    key: QuestionKeys.HAS_CHILDREN,
    toRemoveIfNo: [QuestionKeys.IS_GRAND_PARENT, QuestionKeys.IS_GRAND_GRAND_PARENT]
  },
  {
    text: 'Do I have great children?',
    filterFunction: (person: Person) => person.hasGreatChildren,
    key: QuestionKeys.IS_GRAND_PARENT,
    toRemoveIfYes: [QuestionKeys.HAS_CHILDREN, QuestionKeys.IS_GRAND_GRAND_PARENT],
    higherOrderQuestion: QuestionKeys.AGE_MORE_30
  },
  {
    text: 'Am I a grand-grand-parent?',
    filterFunction: (person: Person) => person.isGrandGrandParent,
    key: QuestionKeys.IS_GRAND_GRAND_PARENT,
    toRemoveIfNo: [QuestionKeys.HAS_CHILDREN],
    higherOrderQuestion: QuestionKeys.IS_GRAND_PARENT
  },
  {
    text: 'Do I have more than 2 children?',
    filterFunction: (person: Person) => person.childrenNumber > 2,
    key: QuestionKeys.HAS_MORE_2_CHILDREN,
    toRemoveIfYes: [QuestionKeys.HAS_CHILDREN],
    higherOrderQuestion: QuestionKeys.HAS_CHILDREN
  },
  /** MARRIED */
  {
    text: 'Am I married?',
    filterFunction: (person: Person) => person.isMarried,
    key: QuestionKeys.IS_MARRIED
  },
  /** BORN IN */
  {
    text: 'Was I born in Morocco?',
    filterFunction: (person: Person) => person.birthCountry === Countries.MOROCCO,
    key: QuestionKeys.BORN_MOROCCO,
    toRemoveIfYes: [QuestionKeys.BORN_ISRAEL, QuestionKeys.BORN_FRANCE]
  },
  {
    text: 'Was I born in France?',
    filterFunction: (person: Person) => person.birthCountry === Countries.FRANCE,
    key: QuestionKeys.BORN_FRANCE,
    toRemoveIfYes: [QuestionKeys.BORN_ISRAEL, QuestionKeys.BORN_MOROCCO]
  },
  {
    text: 'Was I born in Israel?',
    filterFunction: (person: Person) => person.birthCountry === Countries.ISRAEL,
    key: QuestionKeys.BORN_ISRAEL,
    toRemoveIfYes: [QuestionKeys.BORN_FRANCE, QuestionKeys.BORN_MOROCCO]
  },
  /** LIVES IN */
  {
    text: 'Do I live in Israel?',
    filterFunction: (person: Person) => person.residenceCountry === Countries.ISRAEL,
    key: QuestionKeys.LIVES_ISRAEL,
    toRemoveIfYes: [QuestionKeys.LIVES_FRANCE],
    toRemoveIfNo: [QuestionKeys.LIVES_JERUSALEM]
  },
  {
    text: 'Do I live in France?',
    filterFunction: (person: Person) => person.residenceCountry === Countries.FRANCE,
    key: QuestionKeys.LIVES_FRANCE,
    toRemoveIfYes: [QuestionKeys.LIVES_ISRAEL, QuestionKeys.LIVES_JERUSALEM]
  },
  {
    text: 'Do I live in Jerusalem?',
    filterFunction: (person: Person) => person.livesJerusalem,
    key: QuestionKeys.LIVES_JERUSALEM,
    toRemoveIfYes: [QuestionKeys.LIVES_FRANCE, QuestionKeys.LIVES_ISRAEL],
    higherOrderQuestion: QuestionKeys.LIVES_ISRAEL
  },
  /** FIRST NAME STARTS */
  {
    text: 'Do my first name starts with an "A"?',
    filterFunction: (person: Person) => person.name[0].toLowerCase() === 'a',
    key: QuestionKeys.FIRST_NAME_STARTS_A,
    toRemoveIfYes: [QuestionKeys.FIRST_NAME_STARTS_N, QuestionKeys.FIRST_NAME_STARTS_R],
    higherOrderQuestion: QuestionKeys.IS_MAN
  },
  {
    text: 'Do my name starts with an "N"?',
    filterFunction: (person: Person) => person.name[0].toLowerCase() === 'n',
    key: QuestionKeys.FIRST_NAME_STARTS_N,
    toRemoveIfYes: [QuestionKeys.FIRST_NAME_STARTS_A, QuestionKeys.FIRST_NAME_STARTS_R],
    higherOrderQuestion: QuestionKeys.IS_MAN
  },
  {
    text: 'Do my name starts with an "R"?',
    filterFunction: (person: Person) => person.name[0].toLowerCase() === 'ר',
    key: QuestionKeys.FIRST_NAME_STARTS_R,
    toRemoveIfYes: [QuestionKeys.FIRST_NAME_STARTS_A, QuestionKeys.FIRST_NAME_STARTS_N],
    higherOrderQuestion: QuestionKeys.IS_WOMAN
  },
  /** GLASSES */
  {
    text: 'Do I wear glasses?',
    filterFunction: (person: Person) => person.hasGlasses,
    key: QuestionKeys.HAS_GLASSES
  },
  /** LONG EARS - ONLY FOR RABBITS! */
  {
    text: 'Do I have very long ears?',
    filterFunction: (person: Person) => person.hasLongEars,
    key: QuestionKeys.HAS_LONG_EARS,
    toRemoveIfYes: [QuestionKeys.IS_HUMAN, QuestionKeys.IS_ANIMAL],
    higherOrderQuestion: QuestionKeys.IS_ANIMAL
  },
  /** ANIMAL - LONG vs SHORT HAIR */
  {
    text: 'Do I have short hair?',
    filterFunction: (person: Person) => person.animalHasShortHair,
    key: QuestionKeys.ANIMAL_HAS_SHORT_HAIR,
    toRemoveIfYes: [QuestionKeys.IS_HUMAN, QuestionKeys.IS_ANIMAL],
    higherOrderQuestion: QuestionKeys.IS_ANIMAL
  }
];

// I am younger than xxx?
