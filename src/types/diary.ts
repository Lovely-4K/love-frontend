import type categoryType from '~/components/common/CategoryButton/CategoryTypes';

interface Pictures {
  pictures: {
    firstImage: string | null;
    secondImage: string | null;
    thirdImage: string | null;
    fourthImage: string | null;
    fifthImage: string | null;
  };
}

interface Diary {
  kakaoMapId: number;
  datingDay: string;
  score: number;
  category: categoryType;
  boyText: string;
  girlText: string;
  pictures: Pictures;
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

export type { Diary, Diarys, Pictures };
