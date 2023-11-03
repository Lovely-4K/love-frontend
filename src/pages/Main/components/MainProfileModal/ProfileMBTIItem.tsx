import MBTIButton from './MBTIButton';
import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileMBTIItem = () => {
  const { userInfo, activeEdit } = useProfileModal();
  /** @todo type 지정 다시 수정 */
  const itemContent = activeEdit ? (
    <div className="flex">
      <MBTIButton
        topItem="E"
        bottomItem="I"
        position="left"
        selected={userInfo?.mbti[0]}
      />
      <MBTIButton
        topItem="N"
        bottomItem="S"
        position="center"
        selected={userInfo?.mbti[1]}
      />
      <MBTIButton
        topItem="F"
        bottomItem="T"
        position="center"
        selected={userInfo?.mbti[2]}
      />
      <MBTIButton
        topItem="J"
        bottomItem="P"
        position="right"
        selected={userInfo?.mbti[3]}
      />
    </div>
  ) : (
    <div className="font-large input m-0 h-5 p-0 pl-1">{userInfo?.mbti}</div>
  );

  return (
    <ProfileItemWrapper label="MBTI" title="MBTI">
      {itemContent}
    </ProfileItemWrapper>
  );
};

export default ProfileMBTIItem;
