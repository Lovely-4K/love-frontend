import type { UserInfo } from './EditItemType';
import { useState } from 'react';
import EditAvatar from './EditAvatar';
import EditBirthdayItem from './EditBirthdayItem';
import EditColorItem from './EditColorItem';
import EditMbtiItem from './EditMbtiItem';
import EditNameItem from './EditNameItem';

interface EditContainerProps {
  initialUserInfo?: UserInfo;
}

const EditContainer = ({ initialUserInfo }: EditContainerProps) => {
  /** @todo input value값 설정하기 */
  const [activeEdit, setActiveEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '홍건우',
    nickname: '비둘기',
    color: '#0098cf',
    birthday: '1995-11-11',
    MBTI: 'INFJ',
  });

  const handleClick = () => {
    if (activeEdit) {
      setActiveEdit(false);

      return;
    }

    setActiveEdit(true);
  };

  return (
    <>
      <EditAvatar
        activeEdit={activeEdit}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <div className="relative -mt-28 flex flex-col p-6">
        <button
          className="font-medium btn btn-sm mb-6 self-end rounded-lg text-base-white"
          style={{ backgroundColor: '#0098cf' }}
          onClick={handleClick}
        >
          {activeEdit ? '프로필 저장' : '프로필 수정'}
        </button>
        <EditNameItem
          activeEdit={activeEdit}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <EditColorItem
          activeEdit={activeEdit}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <EditBirthdayItem
          activeEdit={activeEdit}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <EditMbtiItem
          activeEdit={activeEdit}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </div>
    </>
  );
};

export default EditContainer;
