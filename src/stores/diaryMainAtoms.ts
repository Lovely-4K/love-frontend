import { atom, useSetAtom } from 'jotai';
import { DiaryContent } from '~/types';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { rootDiarysAtom } from '~/stores/diaryAtoms';

export const diaryCategoryAtom = atom<categoryType | undefined>(undefined);
export const selectSortMethodAtom = atom<string>('datingDay');
export const pageAtom = atom(0);
export const diarysAtom = atom<DiaryContent[]>([]);
