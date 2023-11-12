interface User {
  imageUrl: string | null;
  name: string;
  nickname: string;
  birthday: string;
  mbti: string;
  calendarColor: string;
}

interface EditUser extends Omit<User, 'imageUrl'> {
  imageUrl: string | File | null;
}

export type { User, EditUser };
