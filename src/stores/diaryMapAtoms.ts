import { atom } from 'jotai';
import { MapMarker } from '~/types';

export type MapCategory =
  | 'CAFE'
  | 'FOOD'
  | 'ACCOMODATION'
  | 'CULTURE'
  | undefined;
export type MarkerFilter = 'ALL' | 'GONE' | 'YET' | '';

export const markerFilter = atom<MarkerFilter>('ALL');
export const goneMarkers = atom<MapMarker[]>([]);
export const yetMarkers = atom<MapMarker[]>([]);
