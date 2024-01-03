import { useAtom, useAtomValue } from 'jotai';
import { useToast } from '~/hooks';
import { colors } from '~/theme';
import {
  profileActiveEditAtom,
  profileModalInfoAtom,
} from '../../stores/profileModalAtom';
import ProfileAvatar from './ProfileAvatar';
import ProfileBirthdayItem from './ProfileBirthdayItem';
import ProfileColorItem from './ProfileColorItem';
import ProfileMBTIItem from './ProfileMBTIItem';
import ProfileNameItem from './ProfileNameItem';
import { Button } from '~/components/common';
import { useGetCoupleProfile } from '~/services/couple';
import { useEditProfile } from '~/services/user';

const ProfileContainer = () => {
  const modalInfo = useAtomValue(profileModalInfoAtom);
  const { showToast, handleShowToast } = useToast();
  const [activeEdit, setActiveEdit] = useAtom(profileActiveEditAtom);

  const { data: coupleProfile } = useGetCoupleProfile();
  const { mutate: editProfile } = useEditProfile();

  const handleActiveEdit = () => {
    if (!activeEdit) {
      setActiveEdit(true);

      return;
    }

    if (
      modalInfo.mbti === null ||
      modalInfo.mbti === '' ||
      modalInfo.mbti.length !== 4
    ) {
      handleShowToast();

      return;
    }

    editProfile({
      data: {
        ...modalInfo,
        birthday: modalInfo.birthday
          ? modalInfo.birthday
          : new Date().toISOString().slice(0, 10),
        calendarColor: modalInfo.calendarColor
          ? modalInfo.calendarColor
          : colors.personal.pink,
      },
    });
    setActiveEdit(false);
  };

  const buttonContent = activeEdit ? '프로필 저장' : '프로필 수정';
  const backgroundColor = modalInfo.calendarColor
    ? modalInfo.calendarColor
    : colors.personal.pink;

  return (
    <>
      {showToast && (
        <div className="toast toast-bottom z-50">
          <div className="alert bg-base-secondary text-base-white">
            <span>MBTI를 선택해주세요.</span>
          </div>
        </div>
      )}
      <div
        className="h-36 transition-colors"
        style={{
          backgroundColor,
        }}
      />
      <ProfileAvatar />
      <div className="relative -mt-28 flex flex-col p-6">
        <div className="mb-6 h-7 self-end">
          {modalInfo.id === coupleProfile.myId && (
            <Button
              size="small"
              style={{ backgroundColor }}
              className="text-sm text-base-white"
              onClick={handleActiveEdit}
            >
              {buttonContent}
            </Button>
          )}
        </div>
        <ProfileNameItem />
        <ProfileColorItem />
        <ProfileBirthdayItem />
        <ProfileMBTIItem />
      </div>
    </>
  );
};

export default ProfileContainer;
