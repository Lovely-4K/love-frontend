import { atom } from 'jotai';
import { Coordinates, DiaryContent, MapMarker } from '~/types';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';

export const searchKeywordAtom = atom('');
export const searchModeAtom = atom(false);
export const sideBarToggleAtom = atom(true);
export const markersAtom = atom<MapMarker[]>([]);
export const diaryMarkersAtom = atom<MapMarker[]>([]);
export const infoAtom = atom<MapMarker | undefined>(undefined);
export const infoOpenAtom = atom<boolean>(false);
export const mapAtom = atom<kakao.maps.Map | undefined>(undefined);
export const mapCategoryAtom = atom<categoryType | undefined>(undefined);
export const rootDiarysAtom = atom<DiaryContent[]>([]);
export const userPositionAtom = atom<Coordinates | null>(null);
