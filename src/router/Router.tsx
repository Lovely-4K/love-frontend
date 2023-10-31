import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '~/pages';
import Layout from './Layout';
import { Diary } from '~/pages/Diary';

// todo: 인증 사용자가 아니면 PrivateRoute 로 이동, 인증 사용자일 시 PublicRouter 로 이동

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/diary" element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
