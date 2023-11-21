import { memo } from 'react';
import { User } from '~/types';
import { useProfile } from '../../hooks';
import { Avatar } from '~/components/common';

const Profile = memo(
  ({ nickname, mbti, imageUrl, birthday, calendarColor, id }: User) => {
    const { handleOpenProfileModal } = useProfile();

    return (
      <div
        onClick={() =>
          handleOpenProfileModal({
            nickname,
            mbti,
            imageUrl,
            birthday,
            calendarColor,
            id,
          })
        }
        className="flex cursor-pointer flex-col items-center justify-center gap-2"
      >
        <Avatar
          src={imageUrl as string}
          size="large"
          className="lg:avatar-extra-large"
        />
        <span className="font-title font-bold">{nickname}</span>
        <span className="font-medium text-grey-500">{mbti}</span>
      </div>
    );
  },
);

export default Profile;
