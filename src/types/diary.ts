import type categoryType from '~/components/common/CategoryButton/CategoryTypes';

interface Pictures {
  firstImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  fourthImage: string | null;
  fifthImage: string | null;
}

interface Text {
  text: string;
}

interface Texts {
  myText: string;
  opponentText: string;
}

interface DiaryForm {
  datingDay: string;
  category: categoryType;
  score: number;
  pictures: Pictures;
}

interface DiaryResponse extends DiaryForm, Texts {
  placeName: string;
  kakaoMapId: number;
}

interface DiaryEditRequest extends DiaryForm, Texts {}

interface DiaryCreateReqeust extends DiaryForm, Text {
  placeName: string;
  kakaoMapId: number;
  latitude: number;
  longitude: number;
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
  DiaryResponse,
  DiaryEditRequest,
  DiaryCreateReqeust,
};
