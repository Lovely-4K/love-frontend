import { UseMutateFunction } from '@tanstack/react-query';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { User } from '~/types';
import useEditProfile from '../hooks/useEditProfile';
import useGetProfile from '../hooks/useGetProfile';

interface ProfileModalContextProps {
  activeEdit: boolean;
  setActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editUserInfo: User;
  setEditUserInfo: React.Dispatch<React.SetStateAction<User>>;
  editProfile: UseMutateFunction<any, Error, User, unknown>;
}

const ProfileModalContext = createContext<ProfileModalContextProps>(
  {} as ProfileModalContextProps,
);

const ProfileModalProvider = ({ children }: PropsWithChildren) => {
  const { data: userInfo } = useGetProfile({ userId: 1 });
  const { mutate: editProfile } = useEditProfile();
  const [activeEdit, setActiveEdit] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState<User>({} as User);

  useEffect(() => {
    if (userInfo) {
      setEditUserInfo(userInfo);
    }
  }, [userInfo]);

  return (
    <ProfileModalContext.Provider
      value={{
        activeEdit,
        setActiveEdit,
        editUserInfo,
        setEditUserInfo,
        editProfile,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};

export { ProfileModalContext, ProfileModalProvider };
