import { Question } from 'src/app/interfaces/question';
import { Person } from 'src/app/interfaces/person';

export const filterQuestionsDeps = (questions: Question[], answeredQuestion: Question, answer: 'yes' | 'no', remainingPersons) => {
  return questions.filter(question => {
    const isQuestionToRemoveIfYes = answer === 'yes' && answeredQuestion.toRemoveIfYes?.indexOf(question.key) > -1;
    const isQuestionToRemoveIfNo = answer === 'no' && answeredQuestion.toRemoveIfNo?.indexOf(question.key) > -1;

    if (question.key === answeredQuestion.key || isQuestionToRemoveIfYes || isQuestionToRemoveIfNo) {
      return false;
    }

    return isQuestionHelpful(question, remainingPersons);
  });
};

export const isQuestionHelpful = (question: Question, persons: Person[]): boolean => {
  let isHelpful = false;
  const firstAnswer = question.filterFunction(persons[0]);

  for (const person of persons) {
    if (question.filterFunction(person) !== firstAnswer) {
      isHelpful = true;
      break;
    }
  }
  return isHelpful;
};
