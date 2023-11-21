import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfile, useProfileModal } from '~/pages/Main/hooks';

const ProfileNameItem = () => {
  const { handleInputChange, activeEdit } = useProfileModal();
  const { modalInfo } = useProfile();

  const nickname = modalInfo.nickname;

  return (
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
  );
};

export default ProfileNameItem;
