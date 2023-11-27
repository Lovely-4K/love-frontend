interface User {
  imageUrl: string | File | null;
  nickname: string;
  birthday: string;
  mbti: string;
  calendarColor: string;
  id?: number;
}

export type { User };
