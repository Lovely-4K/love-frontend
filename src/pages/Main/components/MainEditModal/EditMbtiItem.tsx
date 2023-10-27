import type { EditItemProps } from './EditItemType';
import { memo } from 'react';
import EditItemWrapper from './EditItemWrapper';
import MbtiButton from './MbtiButton';

const EditMbtiItem = memo(
  ({ activeEdit, userInfo, setUserInfo }: EditItemProps) => {
    console.log(userInfo.MBTI);

    return (
      <EditItemWrapper label="MBTI" title="MBTI">
        <MbtiButton topItem="E" bottomItem="I" position="left" />
        <MbtiButton topItem="N" bottomItem="S" position="center" />
        <MbtiButton topItem="F" bottomItem="T" position="center" />
        <MbtiButton topItem="J" bottomItem="P" position="right" />
      </EditItemWrapper>
    );
  },
);

export default EditMbtiItem;
