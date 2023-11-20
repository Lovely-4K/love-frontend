interface Diary {
  kakaoMapId: number;
  datingDay: number[];
  score: number;
  category: string;
  boyText: string;
  girlText: string;
  pictures: {
    firstImage: string | null;
    secondImage: string | null;
    thirdImage: string | null;
    fourthImage: string | null;
    fifthImage: string | null;
  };
}

interface Diarys {
  content: {
    diaryId: number;
    kakaoMapId: number;
    imageUrl: string;
    datingDay: string;
    placeName: string;
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

export type { Diary, Diarys };
