interface QuestionToday {
  questionId: number;
  questionContent: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string | null;
  fourthChoice: string | null;
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
  QuestionToday,
  QuestionHistoryPreview,
  QuestionHistories,
  QuestionHistoryDetail,
};
