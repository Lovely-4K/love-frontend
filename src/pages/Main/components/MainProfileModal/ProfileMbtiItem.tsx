import type { ProfileItemProps } from './ProfileItemType';
import { memo } from 'react';
import MbtiButton from './MbtiButton';
import ProfileItemWrapper from './ProfileItemWrapper';

const ProfileMbtiItem = memo(
  ({ activeEdit, userInfo, setUserInfo }: ProfileItemProps) => {
    console.log(userInfo.MBTI);

    return (
      <ProfileItemWrapper label="MBTI" title="MBTI">
        <MbtiButton topItem="E" bottomItem="I" position="left" />
        <MbtiButton topItem="N" bottomItem="S" position="center" />
        <MbtiButton topItem="F" bottomItem="T" position="center" />
        <MbtiButton topItem="J" bottomItem="P" position="right" />
      </ProfileItemWrapper>
    );
  },
);

export default ProfileMbtiItem;
