import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import type { DiaryResponse } from '~/types';
import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import { getTodayDate } from '~/utils/Common';

interface DiaryContentContextProps {
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  diary: DiaryResponse;
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
    images: [],
    kakaoMapId: '',
    placeName: '',
  });
  const [editDiary, setEditDiary] = useState<DiaryResponse>({ ...originDiary });

  const diaryContent = useDiaryContent({
    diary: editDiary,
    setDiary: setEditDiary,
    editable,
    setEditable,
  });

  useEffect(() => {
    setEditDiary({ ...originDiary });
  }, [originDiary]);

  return (
    <DiaryContentContext.Provider
      value={{
        editable,
        setEditable,
        setDiary: setOriginDiary,
        diary: editable ? editDiary : originDiary,
        methods: diaryContent,
      }}
    >
      {children}
    </DiaryContentContext.Provider>
  );
};

export default DiaryContentProvider;
