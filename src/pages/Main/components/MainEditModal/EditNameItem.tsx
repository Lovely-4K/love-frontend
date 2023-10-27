import type { EditItemProps, UserInfo } from './EditItemType';
import { ChangeEvent } from 'react';
import EditItemWrapper from './EditItemWrapper';

const EditNameItem = ({ activeEdit, userInfo, setUserInfo }: EditItemProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setUserInfo((prevUserInfo: UserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));
  };

  return (
    <>
      <EditItemWrapper label="name" title="이름">
        <input
          id="name"
          readOnly={!activeEdit}
          type="text"
          className="font-large input m-0 h-5 w-full p-0 pl-1 focus:outline-none"
          value={userInfo.name}
          onChange={handleChange}
        />
      </EditItemWrapper>
      <EditItemWrapper label="nickname" title="닉네임">
        <input
          id="nickname"
          readOnly={!activeEdit}
          type="text"
          className="font-large input m-0 h-5 w-full p-0 pl-1 focus:outline-none"
          value={userInfo.nickname}
          onChange={handleChange}
        />
      </EditItemWrapper>
    </>
  );
};

export default EditNameItem;
