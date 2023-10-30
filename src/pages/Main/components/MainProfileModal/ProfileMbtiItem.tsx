import MbtiButton from './MbtiButton';
import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileMbtiItem = () => {
  const { userInfo, handleMbtiChange, activeEdit } = useProfileModal();

  return (
    <ProfileItemWrapper label="MBTI" title="MBTI">
      {activeEdit ? (
        <div onClick={handleMbtiChange} className="flex">
          <MbtiButton
            topItem="E"
            bottomItem="I"
            position="left"
            selected={userInfo.MBTI[0]}
          />
          <MbtiButton
            topItem="N"
            bottomItem="S"
            position="center"
            selected={userInfo.MBTI[1]}
          />
          <MbtiButton
            topItem="F"
            bottomItem="T"
            position="center"
            selected={userInfo.MBTI[2]}
          />
          <MbtiButton
            topItem="J"
            bottomItem="P"
            position="right"
            selected={userInfo.MBTI[3]}
          />
        </div>
      ) : (
        <div className="font-large input m-0 h-5 p-0 pl-1">{userInfo.MBTI}</div>
      )}
    </ProfileItemWrapper>
  );
};

export default ProfileMbtiItem;
