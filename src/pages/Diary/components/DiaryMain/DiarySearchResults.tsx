import DiaryMarkerData from '~/pages/Diary/components/DiaryCommon/DiaryMarkerData';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useMarkers from '~/pages/Diary/hooks/useMarkers';

const DiarySearchResults = () => {
  const { searchKeyword } = useInputRef();
  const { markers } = useMarkers();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button>{'<'}</button>
        <span className="text-base-primary">{searchKeyword} </span>
        <span>검색 결과</span>
      </div>
      <div className="flex flex-col gap-2">
        {markers.map((marker) => (
          <div
            key={marker.address}
            className="flex flex-col gap-1 rounded-xl border-2 border-grey-100 px-5 py-3"
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
