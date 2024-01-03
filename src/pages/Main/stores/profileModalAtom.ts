import { atom } from 'jotai';
import { ChangeEvent, MouseEvent } from 'react';
import { personalColors } from '~/constants';
import { User } from '~/types';

export const profileModalInfoAtom = atom<User>({
  birthday: '',
  calendarColor: '',
  imageUrl: '',
  mbti: '',
  nickname: '',
  id: 0,
});

export const handleProfileInputChangeAtom = atom(
  null,
  (_, set, event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    set(profileModalInfoAtom, (prev) => ({ ...prev, [id]: value }));
  },
);

export const handleProfileColorChangeAtom = atom(
  null,
  (_, set, event: MouseEvent<HTMLDivElement>) => {
    const { id: color } = event.currentTarget;
    set(profileModalInfoAtom, (prev) => ({
      ...prev,
      calendarColor: personalColors[color as keyof typeof personalColors],
    }));
  },
);

export const handleProfileAvatarChangeAtom = atom(
  null,
  (_, set, file: File) => {
    set(profileModalInfoAtom, (prev) => ({ ...prev, imageUrl: file }));
  },
);

export const handleMBTIChangeAtom = atom(
  null,
  (get, set, event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const { value } = event.target;
    const modalInfo = get(profileModalInfoAtom);

    if (!modalInfo.mbti) {
      set(profileModalInfoAtom, (prev) => ({
        ...prev,
        mbti: value,
      }));

      return;
    }

    if (modalInfo.mbti.includes(value)) return;

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

    set(profileModalInfoAtom, (prev) => ({
      ...prev,
      mbti: newMBTI,
    }));
  },
);

export const profileActiveEditAtom = atom<boolean>(false);
