import { UseQueryResult } from '@tanstack/react-query';
import { PropsWithChildren, createContext, useState } from 'react';
import { User } from '~/types';
import useGetProfile from '../hooks/useGetProfile';

interface ProfileModalContextProps {
  activeEdit: boolean;
  setActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: User | undefined;
  isLoading: boolean;
}

const ProfileModalContext = createContext<ProfileModalContextProps>(
  {} as ProfileModalContextProps,
);

const ProfileModalProvider = ({ children }: PropsWithChildren) => {
  const { data: userInfo, isLoading } = useGetProfile();
  const [activeEdit, setActiveEdit] = useState(false);
  // const [userInfo, setUserInfo] = useState<User>();

  return (
    <ProfileModalContext.Provider
      value={{
        activeEdit,
        setActiveEdit,
        userInfo,
        isLoading,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};

export { ProfileModalContext, ProfileModalProvider };
