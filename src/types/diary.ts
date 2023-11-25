import type categoryType from '~/components/common/CategoryButton/CategoryTypes';

interface Pictures {
  firstImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  fourthImage: string | null;
  fifthImage: string | null;
}

interface Diary {
  kakaoMapId?: string;
  placeName?: string;
  datingDay: string;
  category: categoryType;
  score: number;
  images?: string[];
  files?: FileList;
}

interface DiaryResponse extends Diary {
  kakaoMapId: string;
  placeName: string;
  pictures: Pictures;
  myText: string;
  opponentText: string;
}

interface DiaryCreateTextRequest extends Diary {
  latitude: number;
  longitude: number;
  placeName: string;
  kakaoMapId: string;
  text: string;
}

interface DiaryEditTextRequest extends Diary {
  myText: null | string;
  opponentText: null | string;
}

interface Diarys {
  content: {
    diaryId: number;
    kakaoMapId: number;
    imageUrl: string;
  }[];
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

export type {
  Diarys,
  Pictures,
  Diary,
  DiaryResponse,
  DiaryCreateTextRequest,
  DiaryEditTextRequest,
};
