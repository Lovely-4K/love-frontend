import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Diary, Pictures } from '~/types';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import useGetDiaryDetail from '~/services/Diary/useGetDiaryDetail';
import { getTodayDate } from '~/utils/Common';

interface DiaryFormValue {
  placeName: string;
  datingDay: string;
  score: number;
  category: categoryType;
  myText: string;
  opponentText: string;
  pictures: Pictures;
}

interface DiaryFormSetMethod {
  setDatingDay: React.Dispatch<React.SetStateAction<string>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<categoryType>>;
  setMyText: React.Dispatch<React.SetStateAction<string>>;
  setPictures: React.Dispatch<React.SetStateAction<Pictures>>;
}

interface DiaryContentContextProps {
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  diary: Diary | undefined;
  spotId: string | undefined;
  diaryId: string | undefined;
  formValue: DiaryFormValue;
  formSetMethod: DiaryFormSetMethod;
}

interface DiaryContentProviderParams extends PropsWithChildren {
  mode: 'read' | 'create' | 'edit';
}
const DiaryContentContext = createContext({} as DiaryContentContextProps);

const DiaryContentProvider = ({
  mode,
  children,
}: DiaryContentProviderParams) => {
  const params = useParams();
  const [editable, setEditable] = useState(
    mode === 'create' || mode === 'edit',
  );
  const { spotId, diaryId } = params;
  const { data: diary } = useGetDiaryDetail({ diaryId });
  const [placeName, setPlaceName] = useState<string>('');
  const [datingDay, setDatingDay] = useState<string>(getTodayDate());
  const [score, setScore] = useState<number>(5);
  const [category, setCategory] = useState<categoryType>('CAFE');
  const [myText, setMyText] = useState<string>('');
  const [opponentText, setOpponentText] = useState<string>('');
  const [pictures, setPictures] = useState<Pictures>({} as Pictures);

  useEffect(() => {
    if (diary === undefined) return;

    const {
      placeName,
      datingDay,
      score,
      category,
      myText,
      opponentText,
      pictures,
    } = diary;

    setPlaceName(placeName);
    setDatingDay(datingDay);
    setScore(score);
    setCategory(category);
    setMyText(myText);
    setOpponentText(opponentText);
    setPictures(pictures);
  }, [diary]);

  return (
    <DiaryContentContext.Provider
      value={{
        editable,
        setEditable,
        diary,
        spotId,
        diaryId,
        formValue: {
          placeName,
          datingDay,
          score,
          category,
          myText,
          opponentText,
          pictures,
        },
        formSetMethod: {
          setDatingDay,
          setScore,
          setCategory,
          setMyText,
          setPictures,
        },
      }}
    >
      {children}
    </DiaryContentContext.Provider>
  );
};

export { DiaryContentContext, DiaryContentProvider };
