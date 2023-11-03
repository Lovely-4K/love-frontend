import { IconCamera } from '~/assets/icons';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileAvatar = () => {
  const { activeEdit, userInfo } = useProfileModal();
  const activeStyle = activeEdit ? 'hover:cursor-pointer' : 'cursor-default';

  return (
    <div className={`avatar z-10 ml-6 -translate-y-1/2 ${activeStyle}`}>
      <div className="avatar-large">
        <img src={userInfo?.imageUrl as string} alt="user avatar" />
      </div>
      {activeEdit && (
        <button className="absolute bottom-0 right-0 h-7 w-7 rounded-full border-2 border-grey-200 bg-base-white">
          <IconCamera className="m-auto h-5 w-5 stroke-grey-500" />
        </button>
      )}
    </div>
  );
};

export default ProfileAvatar;
