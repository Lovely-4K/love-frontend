import {
  ChangeEvent,
  MouseEventHandler,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { personalColors } from '~/constants';
import { useToast } from '~/hooks';
import { colors } from '~/theme';
import { useProfile } from '../hooks';
import { useEditProfile } from '~/services/user';

interface ProfileModalContextProps {
  handleActiveEdit: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: MouseEventHandler<HTMLDivElement>;
  handleAvatarChange: (file: File) => void;
  handleMBTIChange: MouseEventHandler<HTMLDivElement>;
  activeEdit: boolean;
  showToast: boolean;
}

const ProfileModalContext = createContext<ProfileModalContextProps | null>(
  null,
);

const ProfileModalProvider = ({ children }: PropsWithChildren) => {
  const { mutate: editProfile } = useEditProfile();
  const { modalInfo, setModalInfo } = useProfile();
  const [activeEdit, setActiveEdit] = useState(false);
  const { showToast, handleShowToast } = useToast();

  useEffect(() => {
    setActiveEdit(false);
  }, [modalInfo.id]);

  const handleActiveEdit = useCallback(() => {
    if (!activeEdit) {
      setActiveEdit(true);

      return;
    }

    if (
      modalInfo.mbti === null ||
      modalInfo.mbti === '' ||
      modalInfo.mbti.length !== 4
    ) {
      handleShowToast();

      return;
    }

    editProfile({
      data: {
        ...modalInfo,
        birthday: modalInfo.birthday
          ? modalInfo.birthday
          : new Date().toISOString().slice(0, 10),
        calendarColor: modalInfo.calendarColor
          ? modalInfo.calendarColor
          : colors.personal.pink,
      },
    });
    setActiveEdit(false);
  }, [activeEdit, editProfile, modalInfo, handleShowToast]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;

      setModalInfo((prev) => ({
        ...prev,
        [id]: value,
      }));
    },
    [setModalInfo],
  );

  const handleColorChange: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const { id: color } = event.currentTarget;

      setModalInfo((prev) => ({
        ...prev,
        calendarColor: personalColors[color as keyof typeof personalColors],
      }));
    },
    [setModalInfo],
  );

  const handleAvatarChange = useCallback(
    (file: File) => {
      setModalInfo((prev) => ({
        ...prev,
        imageUrl: file,
      }));
    },
    [setModalInfo],
  );

  const getNewMBTI = useCallback(
    (value: string) => {
      let newMBTI = '';

      if (['E', 'I'].includes(value)) {
        newMBTI = value + modalInfo.mbti.slice(1);
      } else if (['S', 'N'].includes(value)) {
        newMBTI = modalInfo.mbti.slice(0, 1) + value + modalInfo.mbti.slice(2);
      } else if (['T', 'F'].includes(value)) {
        newMBTI = modalInfo.mbti.slice(0, 2) + value + modalInfo.mbti.slice(3);
      } else if (['J', 'P'].includes(value)) {
        newMBTI = modalInfo.mbti.slice(0, 3) + value;
      } else {
        newMBTI = modalInfo.mbti as string;
      }

      return newMBTI;
    },
    [modalInfo],
  );

  const handleMBTIChange: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!(event.target instanceof HTMLButtonElement)) return;

      const { value } = event.target;

      if (!modalInfo.mbti) {
        setModalInfo((prev) => ({
          ...prev,
          mbti: value,
        }));

        return;
      }

      if (modalInfo.mbti.includes(value)) return;

      const newMBTI = getNewMBTI(value);

      setModalInfo((prev) => ({
        ...prev,
        mbti: newMBTI,
      }));
    },
    [getNewMBTI, setModalInfo, modalInfo],
  );

  const value = useMemo(
    () => ({
      handleActiveEdit,
      handleInputChange,
      handleColorChange,
      handleAvatarChange,
      handleMBTIChange,
      activeEdit,
      showToast,
    }),
    [
      handleActiveEdit,
      handleInputChange,
      handleColorChange,
      handleAvatarChange,
      handleMBTIChange,
      activeEdit,
      showToast,
    ],
  );

  return (
    <ProfileModalContext.Provider value={value}>
      {children}
    </ProfileModalContext.Provider>
  );
};

export { ProfileModalContext, ProfileModalProvider };
