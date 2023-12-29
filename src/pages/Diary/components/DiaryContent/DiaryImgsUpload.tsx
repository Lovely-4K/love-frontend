// import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { useAtomValue } from 'jotai';
import { IconImageGallery } from '~/assets/icons';
import useDiaryContents from '~/pages/Diary/hooks/DiaryContent/useDiaryContents';
import { imgUrlAtom } from '~/stores/diaryContentAtoms';

const DiaryImgsUpload = () => {
  const imgUrl = useAtomValue(imgUrlAtom);
  const { handleAddImages, handleDeleteImage } = useDiaryContents();

  const imageLength = imgUrl === undefined ? 0 : imgUrl.length;

  return (
    <div className="flex h-[7rem] w-full gap-4 overflow-x-auto pt-2">
      <form method="post" encType="multipart/form-data">
        <label htmlFor="input-file">
          <input
            className="hidden"
            type="file"
            id="input-file"
            accept="image/*"
            multiple
            onChange={handleAddImages}
          />

          <div className="btn flex h-20 w-20 flex-col items-center justify-center bg-grey-100">
            <IconImageGallery className="h-8 w-8" />
            <span className="font-small text-grey-400">({imageLength}/5)</span>
          </div>
        </label>
      </form>
      {imgUrl?.map((url, id) => (
        <div
          key={id}
          id={`item${id}`}
          className="h-20 w-20 flex-shrink-0 rounded-xl border border-grey-200"
        >
          <img
            src={url}
            className="h-20 w-20 rounded-xl"
            alt={`${url}-${id}`}
          />
          <button
            className="relative -right-[90%] -top-[110%] flex h-4 w-4 items-center justify-center rounded-full border border-grey-300 bg-grey-300 text-base-white"
            onClick={() => handleDeleteImage(id)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiaryImgsUpload;
