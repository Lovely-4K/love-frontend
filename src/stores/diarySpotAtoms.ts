import { atom } from 'jotai';

export const selectedIdsAtom = atom<number[]>([]);
export const deleteModeAtom = atom<boolean>(false);
