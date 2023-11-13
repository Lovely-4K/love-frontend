import ProfileAvatar from './ProfileAvatar';
import ProfileBirthdayItem from './ProfileBirthdayItem';
import ProfileColorItem from './ProfileColorItem';
import ProfileMBTIItem from './ProfileMBTIItem';
import ProfileNameItem from './ProfileNameItem';
import { Button } from '~/components/common';
import { useMain, useProfile, useProfileModal } from '~/pages/Main/hooks';

const ProfileContainer = () => {
  const { modalId } = useProfile();
  const { coupleProfile } = useMain();
  const { activeEdit, handleActiveEdit, editUserInfo, userInfo } =
    useProfileModal();

  const buttonContent = activeEdit ? '프로필 저장' : '프로필 수정';

  const backgroundColor = activeEdit
    ? editUserInfo.calendarColor
    : userInfo.calendarColor;

  return (
    <>
      <div
        className="h-36 transition-colors"
        style={{
          backgroundColor,
        }}
      />
      <ProfileAvatar />
      <div className="relative -mt-28 flex flex-col p-6">
        <div className="mb-6 h-7 self-end">
          {modalId === coupleProfile.boyId && (
            <Button
              size="small"
              className="text-sm text-base-white"
              style={{
                backgroundColor,
              }}
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
