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
  },
  SETTING: '/setting',
  KAKAO: '/kakao',
  NAVER: '/naver',
} as const;

export default PATHS;
