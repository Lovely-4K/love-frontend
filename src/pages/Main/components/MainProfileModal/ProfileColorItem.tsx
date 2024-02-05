import { useAtomValue, useSetAtom } from 'jotai';
import { colors } from '~/theme';
import {
  handleProfileColorChangeAtom,
  profileActiveEditAtom,
  profileModalInfoAtom,
} from '../../stores/profileModalAtom';
import ProfileItemWrapper from './ProfileItemWrapper';
import personalColors from '~/constants/personalColor';

const ProfileColorItem = () => {
  const modalInfo = useAtomValue(profileModalInfoAtom);
  const activeEdit = useAtomValue(profileActiveEditAtom);
  const handleColorChange = useSetAtom(handleProfileColorChangeAtom);

  return (
    <ProfileItemWrapper label="color" title="나의 색상">
      {!activeEdit && !modalInfo.calendarColor ? (
        <div className="text-sm">색상을 설정해주세요.</div>
      ) : (
        <div className="dropdown ml-2">
          <div
            tabIndex={0}
            className={`h-7 w-7 rounded-full ${
              activeEdit && 'hover:cursor-pointer'
            }`}
            style={{
              backgroundColor: modalInfo.calendarColor || colors.personal.pink,
            }}
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
      )}
    </ProfileItemWrapper>
  );
};

export default ProfileColorItem;
