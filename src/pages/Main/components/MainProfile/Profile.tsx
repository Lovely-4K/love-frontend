import { memo } from 'react';
import { useProfile } from '../../hooks';
import { Avatar } from '~/components/common';

interface MainProfileProps {
  name: string;
  mbti: string;
  src: string;
  id: number;
}

const Profile = memo(({ name, mbti, src, id }: MainProfileProps) => {
  const { handleOpenProfileModal } = useProfile();

  return (
    <div
      onClick={() => handleOpenProfileModal(id)}
      className="flex cursor-pointer flex-col items-center justify-center gap-2"
    >
      <Avatar src={src} size="large" className="lg:avatar-extra-large" />
      <span className="font-title font-bold">{name}</span>
      <span className="font-medium text-grey-500">{mbti}</span>
    </div>
  );
});

export default Profile;
