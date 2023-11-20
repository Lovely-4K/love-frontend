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
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
]);

export default router;
