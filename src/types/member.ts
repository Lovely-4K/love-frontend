interface User {
  imageUrl: string | File | null;
  nickname: string;
  birthday: string;
  mbti: string;
  calendarColor: string;
  id?: number;
}

interface TrialUser {
  accessToken: string;
  refreshToken: string;
}

export type { User, TrialUser };
