import DiaryMarkerData from '~/pages/Diary/components/DiaryCommon/DiaryMarkerData';
import useHandleMarker from '~/pages/Diary/hooks/useHandleMarker';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useMapCategory from '~/pages/Diary/hooks/useMapCategory';
import useMarkers from '~/pages/Diary/hooks/useMarkers';

const DiarySearchResults = () => {
  const { searchKeyword, endSearchMode } = useInputRef();
  const { markers } = useMarkers();
  const { handleMarker } = useHandleMarker();
  const { mapCategory, translateCategory } = useMapCategory();

  const category = translateCategory(mapCategory);
  const searchMessage = mapCategory ? `내 주변 ${category}` : searchKeyword;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button onClick={endSearchMode}>{'<'}</button>
        <span className="text-base-primary">{searchMessage} </span>
        <span>검색 결과</span>
      </div>
      <div className="flex flex-col gap-2">
        {markers.map((marker) => (
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
        ))}
      </div>
    </div>
  );
};

export default DiarySearchResults;
