import { atom } from 'jotai';
import { MapMarker } from '~/types';

export type MapCategory =
  | 'CAFE'
  | 'FOOD'
  | 'ACCOMODATION'
  | 'CULTURE'
  | undefined;
export type MarkerFilter = 'ALL' | 'GONE' | 'YET' | '';

export const markerFilterAtom = atom<MarkerFilter>('ALL');
export const goneMarkersAtom = atom<MapMarker[]>([]);
export const yetMarkersAtom = atom<MapMarker[]>([]);
