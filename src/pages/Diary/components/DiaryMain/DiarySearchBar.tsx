import { IconSearch } from '~/assets/icons';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const DiarySearchBar = () => {
  const { searchInputRef, handleKeyPress } = useInputRef();

  return (
    <div className="join">
      <input
        type="text"
        ref={searchInputRef}
        placeholder="장소를 검색해보세요."
        className="input join-item input-bordered min-h-12 w-full border-r-0 border-base-primary placeholder-grey-300 focus:outline-0"
        onKeyDown={handleKeyPress}
      />
      <button className="btn join-item border-l-0 border-base-primary bg-base-white hover:border-base-primary hover:bg-base-white">
        <IconSearch className="fill h-[1.25rem] w-[1.25rem] stroke-base-primary" />
      </button>
    </div>
  );
};

export default DiarySearchBar;
