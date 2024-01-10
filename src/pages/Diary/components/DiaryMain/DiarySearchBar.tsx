import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { IconSearch } from '~/assets/icons';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import { searchKeywordAtom } from '~/stores/diaryAtoms';

const DiarySearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const { handleKeyUp } = useInputRef();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchKeyword;
    }
  }, [searchKeyword]);

  return (
    <div className="join">
      <input
        type="text"
        placeholder="장소를 검색해보세요."
        className="input join-item input-bordered min-h-12 w-full border-r-0 border-base-primary placeholder-grey-300 focus:outline-0"
        onKeyUp={handleKeyUp}
        ref={inputRef}
      />
      <button
        className="btn join-item border-l-0 border-base-primary bg-base-white hover:border-base-primary hover:bg-base-white"
        onClick={() => setSearchKeyword(inputRef.current?.value || '')}
      >
        <IconSearch className="fill h-[1.25rem] w-[1.25rem] stroke-base-primary" />
      </button>
    </div>
  );
};

export default DiarySearchBar;
