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

/** @todo 인증 사용자가 아니면 PrivateRoute 로 이동, 인증 사용자일 시 PublicRouter 로 이동 */

const router = createBrowserRouter([
  {
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
        path: PATHS.DIARY,
        element: <Diary />,
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
    path: PATHS.LOGIN,
    element: <Login />,
  },
]);

export default router;