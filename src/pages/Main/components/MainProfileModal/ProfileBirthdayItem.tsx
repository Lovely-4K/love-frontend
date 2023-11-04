import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileBirthdayItem = () => {
  const { activeEdit, editUserInfo, handleInputChange } = useProfileModal();

  /** @todo birthday api 수정되면 반영하기 */
  return (
    <ProfileItemWrapper label="birthday" title="생일">
      <input
        id="birthday"
        readOnly={!activeEdit}
        type="date"
        className="font-large input m-0 h-5 p-0 pl-1 focus:outline-none"
        value={
          Array.isArray(editUserInfo?.birthday)
            ? editUserInfo?.birthday.join('-')
            : editUserInfo?.birthday || ''
        }
        onChange={handleInputChange}
      />
    </ProfileItemWrapper>
  );
};

export default ProfileBirthdayItem;
