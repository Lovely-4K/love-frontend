import { memo } from 'react';
import { useMain } from '../../hooks';
import { Avatar } from '~/components/common';

interface MainProfileProps {
  name: string;
  mbti: string;
  src: string;
}

const Profile = memo(({ name, mbti, src }: MainProfileProps) => {
  const { openProfileModal } = useMain();

  return (
    <div
      onClick={openProfileModal}
      className="flex cursor-pointer flex-col items-center justify-center gap-2"
    >
      <Avatar src={src} type="large" className="lg:avatar-extra-large" />
      <span className="font-title font-bold">{name}</span>
      <span className="font-medium text-grey-500">{mbti}</span>
    </div>
  );
});

export default Profile;
