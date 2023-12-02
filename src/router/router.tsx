import { createBrowserRouter } from 'react-router-dom';
import {
  Calendar,
  Diary,
  Login,
  Main,
  Question,
  QuestionCreate,
  QuestionHistory,
  Setting,
} from '~/pages';
import Layout from './Layout';
import LayoutWithCouple from './LayoutWithCouple';
import PATHS from './paths';
import PrivateRouter from './PrivateRouter';
import { DiaryContent } from '~/pages/Diary/components/DiaryContent';
import { DiaryMain } from '~/pages/Diary/components/DiaryMain';
import { DiarySpot } from '~/pages/Diary/components/DiarySpot';

const router = createBrowserRouter([
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: PATHS.MAIN,
            element: <Main />,
          },
          {
            element: <LayoutWithCouple />,
            children: [
              {
                path: PATHS.CALENDAR,
                element: <Calendar />,
              },
              {
                path: PATHS.DIARY.ROOT,
                element: <Diary />,
                children: [
                  {
                    index: true,
                    element: <DiaryMain />,
                  },
                  {
                    path: PATHS.DIARY.SPOT,
                    element: <DiarySpot />,
                  },
                  {
                    path: PATHS.DIARY.DIARY_DETAIL,
                    element: <DiaryContent mode={'read'} />,
                  },
                  {
                    path: PATHS.DIARY.DIARY_CREATE,
                    element: <DiaryContent mode={'edit'} />,
                  },
                ],
              },
              {
                path: PATHS.QUESTION,
                element: <Question />,
              },
              {
                path: PATHS.QUESTION_CREATE,
                element: <QuestionCreate />,
              },
              {
                path: PATHS.QUESTION_HISTORY,
                element: <QuestionHistory />,
              },
            ],
          },
          {
            path: PATHS.SETTING,
            element: <Setting />,
          },
        ],
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
]);

export default router;
