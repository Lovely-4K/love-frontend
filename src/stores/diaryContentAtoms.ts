import { atom } from 'jotai';
import { EditDiary } from '~/types';
import { getTodayDate } from '~/utils/Common';

export const editableAtom = atom<boolean>(false);
export const editDiaryAtom = atom<EditDiary>({
  datingDay: getTodayDate(),
  category: 'CAFE',
  score: 5,
  myText: '',
  opponentText: '',
  imgURL: [],
  existedImgURL: [],
  newFile: [],
});
