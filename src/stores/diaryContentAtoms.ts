import { atom } from 'jotai';
import { DiaryResponse } from '~/types';
import { getTodayDate } from '~/utils/Common';

export const editableAtom = atom<boolean>(false);
export const loadingAtom = atom<boolean>(false);
export const originDiaryAtom = atom<DiaryResponse>({
  datingDay: getTodayDate(),
  category: 'CAFE',
  score: 5,
  myText: '',
  opponentText: '',
  pictures: {
    firstImage: null,
    secondImage: null,
    thirdImage: null,
    fourthImage: null,
    fifthImage: null,
  },
  kakaoMapId: '',
  placeName: '',
  latitude: 0,
  longitude: 0,
});
export const editDiaryAtom = atom<DiaryResponse>((get) => get(originDiaryAtom));

export const getSetEditableAtom = atom(
  (get) => get(editableAtom),
  (_, set, editable: boolean) => {
    set(editableAtom, editable);
  },
);

export const getCurrentModeDiaryAtom = atom((get) => {
  return get(editableAtom) === true ? get(editDiaryAtom) : get(originDiaryAtom);
});

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
    set(originDiaryAtom, {
      datingDay: getTodayDate(),
      category: 'CAFE',
      score: 5,
      myText: '',
      opponentText: '',
      pictures: {
        firstImage: null,
        secondImage: null,
        thirdImage: null,
        fourthImage: null,
        fifthImage: null,
      },
      kakaoMapId: '',
      placeName: '',
      latitude: 0,
      longitude: 0,
    });
  }
});
