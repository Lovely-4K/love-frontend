import { atom } from 'jotai';
import type { DiaryResponse, Diary } from '~/types';
import { changeImageType } from './../utils/Diary';
import { getTodayDate } from '~/utils/Common';

export const editableAtom = atom<boolean>(false);
export const loadingAtom = atom<boolean>(false);
export const imgsUrlAtom = atom<string[]>([]);
export const originDiaryAtom = atom<DiaryResponse | undefined>(undefined);
export const editDiaryAtom = atom<Diary>({
  datingDay: getTodayDate(),
  category: 'CAFE',
  score: 5,
  myText: '',
  opponentText: '',
  imgURL: [],
});

export const getCurrentModeDiaryAtom = atom<Diary | DiaryResponse>((get) => {
  const currentModeDiary: Diary | DiaryResponse | undefined =
    get(editableAtom) === true ? get(editDiaryAtom) : get(originDiaryAtom);

  if (currentModeDiary === undefined) {
    return get(editDiaryAtom);
  }

  return currentModeDiary;
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

export const setOriginDiaryAtom = atom(
  null,
  (_, set, diaryResponse: DiaryResponse) => {
    if (diaryResponse) {
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
      } = diaryResponse;
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
        imgURL: changeImageType(pictures),
      });
      set(editDiaryAtom, {
        datingDay,
        category,
        score,
        myText,
        opponentText,
        imgURL: changeImageType(pictures),
      });
    } else {
      set(originDiaryAtom, undefined);
    }
  },
);
