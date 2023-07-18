// app/models/quiz.model.ts

export interface Quiz {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
}
export interface QuizQuestion {
    id: number;
    question: string;
    correctAnswer: string;
  }
  