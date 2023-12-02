import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfile, useProfileModal } from '~/pages/Main/hooks';

const ProfileBirthdayItem = () => {
  const { activeEdit, handleInputChange } = useProfileModal();
  const { modalInfo } = useProfile();

  return (
    <ProfileItemWrapper label="birthday" title="생일">
      {!activeEdit && !modalInfo.birthday ? (
        <div className="text-sm">생일을 설정해주세요.</div>
      ) : (
        <input
          id="birthday"
          readOnly={!activeEdit}
          type="date"
          className="font-large input m-0 h-5 p-0 pl-1 focus:outline-none"
          value={modalInfo.birthday || new Date().toISOString().slice(0, 10)}
          onChange={handleInputChange}
        />
      )}
    </ProfileItemWrapper>
  );
};

export default ProfileBirthdayItem;
