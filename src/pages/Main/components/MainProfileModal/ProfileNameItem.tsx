import { useAtomValue, useSetAtom } from 'jotai';
import {
  handleProfileInputChangeAtom,
  profileActiveEditAtom,
  profileModalInfoAtom,
} from '../../stores/profileModalAtom';
import ProfileItemWrapper from './ProfileItemWrapper';

const ProfileNameItem = () => {
  const activeEdit = useAtomValue(profileActiveEditAtom);
  const modalInfo = useAtomValue(profileModalInfoAtom);
  const handleInputChange = useSetAtom(handleProfileInputChangeAtom);

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
