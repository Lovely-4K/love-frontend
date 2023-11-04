interface Question {
  questionId?: number;
  questionContent: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice?: string;
  fourthChoice?: string;
}

interface QuestionHistoryDetail {
  questionContent: string;
  boyAnswer: string;
  girlAnswer: string;
}

interface QuestionHistoryPreview {
  questionId: number;
  questionContent: string;
}

interface QuestionHistories {
  answeredQuestions: QuestionHistoryPreview[];
}

export type {
  Question,
  QuestionHistoryPreview,
  QuestionHistories,
  QuestionHistoryDetail,
};
