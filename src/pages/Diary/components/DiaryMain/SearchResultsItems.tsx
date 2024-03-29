import { useAtomValue } from 'jotai';
import DiaryMarkerData from '~/pages/Diary/components/DiaryCommon/DiaryMarkerData';
import useHandleMarker from '~/pages/Diary/hooks/Diary/useHandleMarker';
import { markersAtom } from '~/stores/diaryAtoms';

const SearchResultsItems = () => {
  const markers = useAtomValue(markersAtom);
  const { handleMarker } = useHandleMarker();

  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      {markers.length === 0 ? (
        <div className="flex justify-center py-10 text-grey-300">
          검색 결과가 없습니다.
        </div>
      ) : (
        markers.map((marker) => (
          <div
            key={`${marker.address}-${marker.content}`}
            className="flex cursor-pointer flex-col gap-1 rounded-xl border-2 border-grey-100 px-5 py-3 hover:border-base-secondary"
            onClick={() => handleMarker(marker)}
          >
            <DiaryMarkerData
              content={marker.content}
              address={marker.address}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResultsItems;
