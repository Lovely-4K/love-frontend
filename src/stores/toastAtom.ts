import { atom } from 'jotai';

export interface Toast {
  id?: number;
  content: string;
}

export const toastAtom = atom<Toast[]>([]);
