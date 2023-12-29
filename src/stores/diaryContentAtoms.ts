import { atom } from 'jotai';
import { DiaryResponse } from '~/types';
import { getTodayDate } from '~/utils/Common';

type ModeAtomType = 'edit' | 'read';

export const modeAtom = atom<ModeAtomType>('edit');
export const editableAtom = atom<boolean>(false); // modeAtom 따라서 변경
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
export const existedImgAtom = atom<string[]>([]);
export const imgUrlAtom = atom<string[]>([]);
export const editDiaryAtom = atom(
  (get) => get(originDiaryAtom),
  (_, set, arg: DiaryResponse) => set(originDiaryAtom, arg), // editDiaryAtom을 직접 변경하려면?
);
