import { atom } from 'jotai';
import { SETTING_TAB } from '../constants';

export const activeTabAtom = atom<keyof typeof SETTING_TAB>('LOGOUT');
