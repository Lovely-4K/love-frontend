import { PropsWithChildren, createContext, useState } from 'react';

interface UserInfo {
  name: string;
  nickname: string;
  color: string;
  birthday: string;
  avatar: string;
  MBTI: string;
}

interface ProfileModalContextProps {
  activeEdit: boolean;
  setActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const ProfileModalContext = createContext<ProfileModalContextProps>(
  {} as ProfileModalContextProps,
);

const ProfileModalProvider = ({ children }: PropsWithChildren) => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '홍건우',
    nickname: '비둘기',
    color: '#0098cf',
    birthday: '1995-11-11',
    avatar: 'https://picsum.photos/200',
    MBTI: 'INFJ',
  });

  return (
    <ProfileModalContext.Provider
      value={{ activeEdit, setActiveEdit, userInfo, setUserInfo }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};

export { ProfileModalContext, ProfileModalProvider };
