import { ChangeEvent, useState } from 'react';
import { IconImageGallery } from '~/assets/icons';
import { Carousel, DiaryPreviewItem, Rating } from '~/components/domain';
import { DiaryCategoryList } from '~/pages/Diary/components/DiaryCommon';

const DiaryContent = () => {
  const [editMode, setEditMode] = useState(false);

  const pictures = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ];

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleEditComplete = () => {
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setEditMode(false);
  };

  const [showImages, setShowImages] = useState<string[]>([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('hi');
    const imageLists = event.target.files!;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
    console.log(showImages);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    console.log(showImages);
  };

  return (
    <>
      <div className="flex w-full max-w-[20rem] flex-col gap-6 overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-between">
          <div className="font-title flex gap-2 font-bold">
            <button>{'<'}</button>
            <span>김선익 내과</span>
          </div>
          {editMode || (
            <div className="font-small flex gap-2 text-grey-400">
              <button onClick={handleEditMode}>수정</button>
              <button>삭제</button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-large font-bold text-base-black">날짜</span>
            <div>
              <input
                className="font-medium text-base-black focus:outline-none"
                type="date"
                value={'2023-10-31'}
                readOnly={editMode ? false : true}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-large font-bold text-base-black">평점</span>
            <div>
              <Rating readonly={!editMode} />
            </div>
          </div>
        </div>
        <DiaryCategoryList />
        <div className="flex flex-col gap-2">
          <span className="font-large font-bold text-base-black">
            다이어리 내용
          </span>
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-grey-200 px-3 py-5">
            {editMode ? (
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
            ) : (
              <div className="h-[10rem]">
                <Carousel pictures={pictures} />
              </div>
            )}
            <textarea
              className={`font-small textarea h-[15rem] w-[95%] resize-none placeholder:font-small placeholder:text-grey-300 ${
                editMode || 'focus:outline-none'
              }`}
              maxLength={200}
              placeholder="데이트를 하며 좋았던 순간을 기록해보세요"
              readOnly={editMode ? false : true}
            ></textarea>
          </div>
          {editMode && (
            <div className="flex justify-end gap-2">
              <button
                onClick={handleEditCancel}
                className="btn-small w-full rounded-xl border border-grey-200 text-grey-400"
              >
                취소
              </button>
              <button
                onClick={handleEditComplete}
                className="btn-small w-full rounded-xl border bg-base-primary text-base-white"
              >
                완료
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiaryContent;
