import { useContext } from 'react';
import { IconImageGallery } from '~/assets/icons';
import { DiaryImgsContext } from '~/pages/Diary/contexts/DiaryImgsContext';

const DiaryImgsUpload = () => {
  const contextValue = useContext(DiaryImgsContext);

  if (!contextValue) {
    return null;
  }

  const { showImages, handleAddImages, handleDeleteImage } = contextValue;

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
            <span className="font-small text-grey-400">
              ({showImages.length}/5)
            </span>
          </div>
        </label>
      </form>
      {showImages.map((image, id) => (
        <div
          key={id}
          id={`item${id}`}
          className="h-20 w-20 flex-shrink-0 rounded-xl border border-grey-200"
        >
          <img
            src={image}
            className="h-20 w-20 rounded-xl"
            alt={`${image}-${id}`}
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
