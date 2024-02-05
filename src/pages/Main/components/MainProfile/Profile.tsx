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
        className="flex cursor-pointer flex-col items-center justify-center"
      >
        <Avatar
          src={imageUrl as string}
          size="large"
          className="md:h-[9.375rem] md:w-[9.375rem]"
        />
        <div className="mt-2 flex flex-col items-center">
          <span className="text-base font-bold md:text-lg">{nickname}</span>
          <span className="text-sm font-medium text-grey-500 md:text-base">
            {mbti}
          </span>
        </div>
      </div>
    );
  },
);

export default Profile;
