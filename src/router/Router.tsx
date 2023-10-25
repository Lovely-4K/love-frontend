import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// todo: 인증 사용자가 아니면 PrivateRoute 로 이동, 인증 사용자일 시 PublicRouter 로 이동

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
