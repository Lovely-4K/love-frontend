import { useAtomValue } from 'jotai';
import {
  profileActiveEditAtom,
  profileModalInfoAtom,
} from '../../stores/profileModalAtom';
import MBTIButton from './MBTIButton';
import ProfileItemWrapper from './ProfileItemWrapper';

const ProfileMBTIItem = () => {
  const activeEdit = useAtomValue(profileActiveEditAtom);
  const modalInfo = useAtomValue(profileModalInfoAtom);

  const itemContent = activeEdit ? (
    <div className="flex">
      <MBTIButton
        topItem="E"
        bottomItem="I"
        position="left"
        selected={modalInfo.mbti && modalInfo.mbti[0]}
      />
      <MBTIButton
        topItem="N"
        bottomItem="S"
        position="center"
        selected={modalInfo.mbti && modalInfo.mbti[1]}
      />
      <MBTIButton
        topItem="F"
        bottomItem="T"
        position="center"
        selected={modalInfo.mbti && modalInfo.mbti[2]}
      />
      <MBTIButton
        topItem="J"
        bottomItem="P"
        position="right"
        selected={modalInfo.mbti && modalInfo.mbti[3]}
      />
    </div>
  ) : (
    <div
      className={`input m-0 h-5 p-0 ${
        modalInfo.mbti ? 'pl-1 text-base' : 'text-sm'
      }`}
    >
      {modalInfo.mbti || 'MBTI를 설정해주세요'}
    </div>
  );

  return (
    <ProfileItemWrapper label="MBTI" title="MBTI">
      {itemContent}
    </ProfileItemWrapper>
  );
};

export default ProfileMBTIItem;
