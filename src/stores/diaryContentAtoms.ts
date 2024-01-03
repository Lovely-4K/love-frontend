import { atom } from 'jotai';
import type { DiaryResponse, Diary } from '~/types';
import { getTodayDate } from '~/utils/Common';

export const editableAtom = atom<boolean>(false);
export const loadingAtom = atom<boolean>(false);
export const originDiaryAtom = atom<DiaryResponse | undefined>(undefined);
export const editDiaryAtom = atom<Diary>({
  datingDay: getTodayDate(),
  category: 'CAFE',
  score: 5,
  text: '',
});

export const getCurrentModeDiaryAtom = atom((get) => {
  return get(editableAtom) === true || get(originDiaryAtom) === undefined
    ? get(editDiaryAtom)
    : get(originDiaryAtom);
});

export const setEditDiaryPropertyAtom = atom(
  null,
  (get, set, property: Partial<Diary>) => {
    set(editDiaryAtom, {
      ...get(editDiaryAtom),
      ...property,
    });
  },
);

export const setOriginDiaryAtom = atom(null, (_, set, diary: DiaryResponse) => {
  if (diary) {
    const {
      datingDay,
      category,
      score,
      myText,
      opponentText,
      pictures,
      kakaoMapId,
      placeName,
      latitude,
      longitude,
    } = diary;
    set(originDiaryAtom, {
      datingDay,
      category,
      score,
      myText,
      opponentText,
      kakaoMapId,
      placeName,
      latitude,
      longitude,
      pictures,
    });
  } else {
    set(originDiaryAtom, undefined);
  }
});
