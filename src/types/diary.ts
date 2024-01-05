import type categoryType from '~/components/common/CategoryButton/CategoryTypes';

interface Pictures {
  firstImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  fourthImage: string | null;
  fifthImage: string | null;
}

interface Diary {
  datingDay: string;
  score: number;
  category: categoryType;
  myText: string;
  opponentText: string;
  imgURL: string[];
}

interface ReadDiary extends Diary {
  kakaoMapId: string;
  placeName: string;
  pictures: Pictures;
  latitude: number;
  longitude: number;
}

interface EditDiary extends Diary {
  existedImgURL: string[];
  newFile: File[];
}

interface DiaryContentRequest extends Omit<Diary, 'myText' | 'opponentText'> {
  text: string;
  kakaoMapId: number;
  address: string;
  placeName: string;
  latitude: number;
  longitude: number;
  imgUrl: string[];
  files?: FileList;
}

interface DiaryEditTextRequest
  extends Omit<Diary, 'imgURL' | 'myText' | 'opponentText'> {
  text: string;
}

interface DiaryContent {
  diaryId: number;
  kakaoMapId: number;
  imageUrl: string;
  datingDay: string;
  placeName: string;
  address: string;
  latitude: number;
  longitude: number;
}

interface Diarys {
  content: DiaryContent[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface SpotDiaries {
  diaries: {
    diaryId: number;
    imageUrl: string;
    datingDay: string;
  }[];
}

export type {
  Diarys,
  Pictures,
  Diary,
  ReadDiary,
  EditDiary,
  DiaryContentRequest,
  DiaryEditTextRequest,
  SpotDiaries,
  DiaryContent,
};
