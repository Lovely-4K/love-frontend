const PATHS = {
  MAIN: '/',
  LOGIN: '/login',
  CALENDAR: '/calendar',
  QUESTION: '/question',
  QUESTION_HISTORY: '/question/history',
  QUESTION_CREATE: '/question/create',
  DIARY: {
    ROOT: '/diary',
    SPOT: '/diary/:spotId',
    DIARY_CREATE: '/diary/:spotId/create',
    DIARY_DETAIL: '/diary/:spotId/:diaryId',
    DIARY_EDIT: '/diary/:spotId/:diaryId/edit',
  },
  SETTING: '/setting',
  KAKAO: 'https://love-back.kro.kr/oauth2/authorization/kakao',
  NAVER: 'https://love-back.kro.kr/oauth2/authorization/naver',
};

export default PATHS;
