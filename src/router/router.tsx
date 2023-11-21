import { createBrowserRouter } from 'react-router-dom';
import {
  Calendar,
  Diary,
  Login,
  Main,
  Question,
  QuestionCreate,
  QuestionHistory,
} from '~/pages';
import Layout from './Layout';
import PATHS from './paths';
import PrivateRouter from './PrivateRouter';
import { DiaryContent } from '~/pages/Diary/components/DiaryContent';
import { DiarySpot } from '~/pages/Diary/components/DiarySpot';

const router = createBrowserRouter([
  {
    element: <PrivateRouter />,
    children: [
      {
        path: PATHS.MAIN,
        element: <Layout />,
        children: [
          {
            path: PATHS.MAIN,
            element: <Main />,
          },
          {
            path: PATHS.CALENDAR,
            element: <Calendar />,
          },
          {
            path: PATHS.DIARY.ROOT,
            element: <Diary />,
            children: [
              {
                path: PATHS.DIARY.SPOT,
                element: <DiarySpot />,
                children: [
                  {
                    path: PATHS.DIARY.DIARY_DETAIL,
                    element: <DiaryContent />,
                  },
                ],
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
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
]);

export default router;
