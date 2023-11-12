import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { EditUser, User } from '~/types';
import { useGetProfile, useProfile } from '../hooks';

interface ProfileModalContextProps {
  userInfo: User;
  activeEdit: boolean;
  setActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editUserInfo: EditUser;
  setEditUserInfo: React.Dispatch<React.SetStateAction<EditUser>>;
  modalId: number;
}

const ProfileModalContext = createContext<ProfileModalContextProps | null>(
  null,
);

const ProfileModalProvider = ({ children }: PropsWithChildren) => {
  const { modalId } = useProfile();
  const getProfileQuery = useGetProfile({ userId: modalId });
  const [activeEdit, setActiveEdit] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState<EditUser>({} as EditUser);

  useEffect(() => {
    setActiveEdit(false);
  }, [modalId]);

  if (getProfileQuery.isLoading) {
    return <div>스켈레톤 UI...</div>;
  }

  if (getProfileQuery.isError) {
    return <div>에러 UI...</div>;
  }

  if (!getProfileQuery.isSuccess) return;

  return (
    <ProfileModalContext.Provider
      value={{
        userInfo: getProfileQuery.data,
        activeEdit,
        setActiveEdit,
        editUserInfo,
        setEditUserInfo,
        modalId,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};

export { ProfileModalContext, ProfileModalProvider };
