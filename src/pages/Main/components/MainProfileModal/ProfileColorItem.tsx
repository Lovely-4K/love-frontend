import ProfileItemWrapper from './ProfileItemWrapper';
import personalColors from '~/constants/personalColor';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileColorItem = () => {
  const { editUserInfo, activeEdit, handleColorChange } = useProfileModal();

  return (
    <ProfileItemWrapper label="color" title="사랑의 색깔">
      <div className="dropdown ml-2">
        <div
          tabIndex={0}
          className={`h-7 w-7 rounded-full ${
            activeEdit && 'hover:cursor-pointer'
          }`}
          style={{ backgroundColor: editUserInfo?.calendarColor }}
        />
        {activeEdit && (
          <div
            tabIndex={0}
            className="dropdown-content z-[1] grid w-28 grid-cols-3 justify-items-center gap-y-2 rounded-xl bg-base-100 p-2 shadow"
          >
            {Object.keys(personalColors).map((color) => (
              <div
                key={color}
                id={color}
                onClick={handleColorChange}
                className={`h-5 w-5 cursor-pointer rounded-full ${color}`}
              />
            ))}
          </div>
        )}
      </div>
    </ProfileItemWrapper>
  );
};

export default ProfileColorItem;
