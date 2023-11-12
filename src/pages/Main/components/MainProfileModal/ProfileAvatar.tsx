import { useRef } from 'react';
import { IconCamera } from '~/assets/icons';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileAvatar = () => {
  const { activeEdit, editUserInfo, handleAvatarChange, userInfo } =
    useProfileModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const activeStyle = activeEdit ? 'hover:cursor-pointer' : 'cursor-default';

  const handleAvatarClick = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  const handleEditProfileImage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;

    if (!files) return;

    handleAvatarChange(files[0]);
  };

  const imageURL = activeEdit
    ? editUserInfo.imageUrl instanceof File
      ? URL.createObjectURL(editUserInfo.imageUrl)
      : (editUserInfo.imageUrl as string)
    : (userInfo.imageUrl as string);

  return (
    <div
      onClick={handleAvatarClick}
      className={`avatar z-10 ml-6 -translate-y-1/2 ${activeStyle}`}
    >
      <div className="w-32 rounded-full">
        <img ref={imageRef} src={imageURL} alt="user avatar" />
      </div>
      {activeEdit && (
        <>
          <button className="absolute bottom-0 right-0 h-7 w-7 rounded-full border-2 border-grey-200 bg-base-white">
            <IconCamera className="m-auto h-5 w-5 stroke-grey-500" />
          </button>
          <input
            type="file"
            className="hidden"
            onChange={handleEditProfileImage}
            ref={inputRef}
          />
        </>
      )}
    </div>
  );
};

export default ProfileAvatar;
