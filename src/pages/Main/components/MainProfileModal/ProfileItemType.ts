export interface UserInfo {
  name: string;
  nickname: string;
  color: string;
  birthday: string;
  MBTI: string;
}

export interface ProfileItemProps {
  activeEdit: boolean;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}
