interface QuestionToday {
  questionId?: number;
  questionContent: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice?: string | null;
  fourthChoice?: string | null;
  questionFormType?: string;
}

interface QuestionHistoryDetail {
  questionContent: string;
  myAnswer: string;
  opponentAnswer: string;
  myChoiceIndex: number;
  opponentChoiceIndex: number;
  myProfile: string;
  opponentProfile: string;
}

interface QuestionHistoryPreview {
  questionId: number;
  questionContent: string;
  questionType: string;
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
