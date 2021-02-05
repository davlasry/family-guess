import { Question } from 'src/app/data/questions';

export const filterQuestionsDeps = (questions: Question[], question: Question, answer: 'yes' | 'no') => {
  console.log(question);
  console.log(question.toRemoveIfYes);
  return questions.filter(q => {
    if (q.key === question.key) {
      return false;
    }

    if (answer === 'yes' && question.toRemoveIfYes?.indexOf(q.key) > -1) {
      console.log('HALLOOOOOOOO');
      return false;
    }

    return true;
  });
};
