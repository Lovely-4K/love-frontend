import { colors } from '~/theme';
import ProfileAvatar from './ProfileAvatar';
import ProfileBirthdayItem from './ProfileBirthdayItem';
import ProfileColorItem from './ProfileColorItem';
import ProfileMBTIItem from './ProfileMBTIItem';
import ProfileNameItem from './ProfileNameItem';
import { Button } from '~/components/common';
import { useMain, useProfile, useProfileModal } from '~/pages/Main/hooks';

const ProfileContainer = () => {
  const { coupleProfile } = useMain();
  const { modalInfo } = useProfile();
  const { handleActiveEdit, activeEdit, showToast } = useProfileModal();

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
