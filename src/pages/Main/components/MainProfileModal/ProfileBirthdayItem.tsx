import { useAtomValue, useSetAtom } from 'jotai';
import {
  handleProfileInputChangeAtom,
  profileActiveEditAtom,
  profileModalInfoAtom,
} from '../../stores/profileModalAtom';
import ProfileItemWrapper from './ProfileItemWrapper';

const ProfileBirthdayItem = () => {
  const activeEdit = useAtomValue(profileActiveEditAtom);
  const modalInfo = useAtomValue(profileModalInfoAtom);
  const handleInputChange = useSetAtom(handleProfileInputChangeAtom);

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
