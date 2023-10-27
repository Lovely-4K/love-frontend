import type { EditItemProps } from './EditItemType';
import EditItemWrapper from './EditItemWrapper';

const EditColorItem = ({
  activeEdit,
  userInfo,
  setUserInfo,
}: EditItemProps) => {
  /** @todo color 형식 변경과 setUserInfo 추가 */
  return (
    <EditItemWrapper label="color" title="사랑의 색깔">
      <div className="dropdown">
        <div
          tabIndex={0}
          className="h-7 w-7 rounded-full"
          style={{ backgroundColor: userInfo.color }}
        />
        {activeEdit && (
          <div
            tabIndex={0}
            className="dropdown-content z-[1] grid w-28 grid-cols-3 justify-items-center gap-y-2 rounded-xl bg-base-100 p-2 shadow"
          >
            <div className="h-5 w-5 rounded-full bg-grey-200" />
            <div className="h-5 w-5 rounded-full bg-personal-blue" />
            <div className="h-5 w-5 rounded-full bg-personal-orange" />
            <div className="h-5 w-5 rounded-full bg-personal-green" />
            <div className="h-5 w-5 rounded-full bg-personal-pink" />
            <div className="h-5 w-5 rounded-full bg-personal-purple" />
          </div>
        )}
      </div>
    </EditItemWrapper>
  );
};

export default EditColorItem;
