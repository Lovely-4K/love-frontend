import type { ProfileItemProps, UserInfo } from './ProfileItemType';
import { ChangeEvent } from 'react';
import ProfileItemWrapper from './ProfileItemWrapper';

const ProfileNameItem = ({
  activeEdit,
  userInfo,
  setUserInfo,
}: ProfileItemProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setUserInfo((prevUserInfo: UserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));
  };

  return (
    <>
      <ProfileItemWrapper label="name" title="이름">
        <input
          id="name"
          readOnly={!activeEdit}
          type="text"
          className="font-large input m-0 h-5 w-full p-0 pl-1 focus:outline-none"
          value={userInfo.name}
          onChange={handleChange}
        />
      </ProfileItemWrapper>
      <ProfileItemWrapper label="nickname" title="닉네임">
        <input
          id="nickname"
          readOnly={!activeEdit}
          type="text"
          className="font-large input m-0 h-5 w-full p-0 pl-1 focus:outline-none"
          value={userInfo.nickname}
          onChange={handleChange}
        />
      </ProfileItemWrapper>
    </>
  );
};

export default ProfileNameItem;
