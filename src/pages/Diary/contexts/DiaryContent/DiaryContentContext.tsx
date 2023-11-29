import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import type { DiaryResponse } from '~/types';
import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import { getTodayDate } from '~/utils/Common';
import { changeImageType } from '~/utils/Diary';

interface DiaryContentContextProps {
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  diary: DiaryResponse;
  imgUrl: string[];
  setDiary: React.Dispatch<React.SetStateAction<DiaryResponse>>;
  methods: ReturnType<typeof useDiaryContent>;
}

interface DiaryContentProvider extends PropsWithChildren {
  mode: 'edit' | 'read';
}

export const DiaryContentContext =
  createContext<null | DiaryContentContextProps>(null);

const DiaryContentProvider = ({ mode, children }: DiaryContentProvider) => {
  const [editable, setEditable] = useState(mode === 'edit');
  const [loading, setLoading] = useState(false);
  const [originDiary, setOriginDiary] = useState<DiaryResponse>({
    datingDay: getTodayDate(),
    category: 'CAFE',
    score: 5,
    myText: '',
    opponentText: '',
    pictures: {
      firstImage: null,
      secondImage: null,
      thirdImage: null,
      fourthImage: null,
      fifthImage: null,
    },
    kakaoMapId: '',
    placeName: '',
  });
  const [existedImg, setExistedImg] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [editDiary, setEditDiary] = useState<DiaryResponse>({ ...originDiary });

  const diaryContent = useDiaryContent({
    setLoading,
    editDiary,
    setEditDiary,
    editable,
    setEditable,
    imgUrl,
    setImgUrl,
    existedImg,
    setExistedImg,
  });

  useEffect(() => {
    setEditDiary({ ...originDiary });
    const imgURL = changeImageType(originDiary.pictures);
    setImgUrl(imgURL);
    setExistedImg(imgURL);
  }, [originDiary]);

  useEffect(() => {
    console.log(imgUrl);
  }, [imgUrl]);

  return (
    <DiaryContentContext.Provider
      value={{
        loading,
        setLoading,
        editable,
        setEditable,
        setDiary: setOriginDiary,
        diary: editable ? editDiary : originDiary,
        methods: diaryContent,
        imgUrl,
      }}
    >
      {children}
    </DiaryContentContext.Provider>
  );
};

export default DiaryContentProvider;
