import { ChangeEvent, MouseEventHandler, useContext } from 'react';
import { personalColors } from '~/constants';
import { ProfileModalContext } from '../context/ProfileModalContext';

const useProfileModal = () => {
  const { activeEdit, setActiveEdit, userInfo, setUserInfo } =
    useContext(ProfileModalContext);

  const handleActiveEdit = () => {
    if (!activeEdit) {
      setActiveEdit(true);

      return;
    }

    setActiveEdit(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  const handleColorChange: MouseEventHandler<HTMLDivElement> = (event) => {
    const { id: color } = event.currentTarget;

    setUserInfo({
      ...userInfo,
      color: personalColors[color as keyof typeof personalColors],
    });
  };

  const handleMbtiChange: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const { value } = event.target;

    if (userInfo.MBTI.includes(value)) return;

    let newMBTI = '';

    if (['E', 'I'].includes(value)) {
      newMBTI = value + userInfo.MBTI.slice(1);
    }

    if (['S', 'N'].includes(value)) {
      newMBTI = userInfo.MBTI.slice(0, 1) + value + userInfo.MBTI.slice(2);
    }

    if (['T', 'F'].includes(value)) {
      newMBTI = userInfo.MBTI.slice(0, 2) + value + userInfo.MBTI.slice(3);
    }

    if (['J', 'P'].includes(value)) {
      newMBTI = userInfo.MBTI.slice(0, 3) + value;
    }

    setUserInfo({
      ...userInfo,
      MBTI: newMBTI,
    });
  };

  return {
    activeEdit,
    handleActiveEdit,
    userInfo,
    handleInputChange,
    handleColorChange,
    handleMbtiChange,
  };
};

export default useProfileModal;
