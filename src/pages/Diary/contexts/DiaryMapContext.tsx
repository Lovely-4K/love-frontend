import { PropsWithChildren, createContext, useState } from 'react';

type MapCategory = 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | '';
type MarkerFilter = 'ALL' | 'GONE' | 'YET' | '';

interface DiaryMapContextProps {
  mapCategory: MapCategory;
  setMapCategory: React.Dispatch<React.SetStateAction<MapCategory>>;
  markerFilter: MarkerFilter;
  setMarkerFilter: React.Dispatch<React.SetStateAction<MarkerFilter>>;
}

const DiaryMapContext = createContext<DiaryMapContextProps | null>(null);

const DiaryMapProvider = ({ children }: PropsWithChildren) => {
  const [mapCategory, setMapCategory] = useState<MapCategory>('');
  const [markerFilter, setMarkerFilter] = useState<MarkerFilter>('');

  return (
    <DiaryMapContext.Provider
      value={{
        mapCategory,
        setMapCategory,
        markerFilter,
        setMarkerFilter,
      }}
    >
      {children}
    </DiaryMapContext.Provider>
  );
};

export { DiaryMapContext, DiaryMapProvider };
