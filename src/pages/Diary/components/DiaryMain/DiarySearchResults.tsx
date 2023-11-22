import DiaryMarkerData from '~/pages/Diary/components/DiaryCommon/DiaryMarkerData';
import useHandleMarker from '~/pages/Diary/hooks/useHandleMarker';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useMarkers from '~/pages/Diary/hooks/useMarkers';

const DiarySearchResults = () => {
  const { searchKeyword, endSearchMode } = useInputRef();
  const { markers } = useMarkers();
  const { handleMarker } = useHandleMarker();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button onClick={endSearchMode}>{'<'}</button>
        <span className="text-base-primary">{searchKeyword} </span>
        <span>검색 결과</span>
      </div>
      <div className="flex flex-col gap-2">
        {markers.map((marker) => (
          <div
            key={`${marker.address}-${marker.content}`}
            className="flex flex-col gap-1 rounded-xl border-2 border-grey-100 px-5 py-3"
            onClick={() => handleMarker}
          >
            <DiaryMarkerData
              content={marker.content}
              address={marker.address}
              phone={marker.phone}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiarySearchResults;
