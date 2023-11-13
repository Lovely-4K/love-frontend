import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileNameItem = () => {
  const { editUserInfo, handleInputChange, activeEdit, userInfo } =
    useProfileModal();

  const name = activeEdit ? editUserInfo.name : userInfo.name;
  const nickname = activeEdit ? editUserInfo.nickname : userInfo.nickname;

  return (
    <>
      <ProfileItemWrapper label="name" title="이름">
        <input
          id="name"
          readOnly={!activeEdit}
          type="text"
          className="font-large input m-0 h-5 w-full p-0 pl-1 focus:outline-none"
          value={name}
          onChange={handleInputChange}
        />
      </ProfileItemWrapper>
      <ProfileItemWrapper label="nickname" title="닉네임">
        <input
          id="nickname"
          readOnly={!activeEdit}
          type="text"
          className="font-large input m-0 h-5 w-full p-0 pl-1 focus:outline-none"
          value={nickname}
          onChange={handleInputChange}
        />
      </ProfileItemWrapper>
    </>
  );
};

export default ProfileNameItem;
