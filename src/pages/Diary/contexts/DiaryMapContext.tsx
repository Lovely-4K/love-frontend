// import { PropsWithChildren, createContext, useState } from 'react';
// import { MapMarker } from '~/types';

// export type MapCategory =
//   | 'CAFE'
//   | 'FOOD'
//   | 'ACCOMODATION'
//   | 'CULTURE'
//   | undefined;
// export type MarkerFilter = 'ALL' | 'GONE' | 'YET' | '';

// export interface DiaryMapContextProps {
//   markerFilter: MarkerFilter;
//   setMarkerFilter: React.Dispatch<React.SetStateAction<MarkerFilter>>;
//   goneMarkers: MapMarker[];
//   setGoneMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
//   yetMarkers: MapMarker[];
//   setYetMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>>;
// }

// const DiaryMapContext = createContext<DiaryMapContextProps | null>(null);

// const DiaryMapProvider = ({ children }: PropsWithChildren) => {
//   const [markerFilter, setMarkerFilter] = useState<MarkerFilter>('ALL');
//   const [goneMarkers, setGoneMarkers] = useState<MapMarker[]>([]);
//   const [yetMarkers, setYetMarkers] = useState<MapMarker[]>([]);

//   return (
//     <DiaryMapContext.Provider
//       value={{
//         markerFilter,
//         setMarkerFilter,
//         goneMarkers,
//         setGoneMarkers,
//         yetMarkers,
//         setYetMarkers,
//       }}
//     >
//       {children}
//     </DiaryMapContext.Provider>
//   );
// };

// export { DiaryMapContext, DiaryMapProvider };
