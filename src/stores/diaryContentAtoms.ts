import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { EditDiary } from '~/types';
import { getTodayDate } from '~/utils/Common';

export const editableAtom = atom<boolean>(false);
export const editDiaryAtom = atomWithReset<EditDiary>({
  datingDay: getTodayDate(),
  category: 'CAFE',
  score: 5,
  myText: '',
  opponentText: '',
  imgURL: [],
  existedImgURL: [],
  newFile: [],
});
