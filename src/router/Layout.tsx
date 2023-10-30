import { Outlet } from 'react-router';
import { Footer } from '~/components/domain';

const Layout = () => {
  return (
    <div className="flex h-screen w-screen flex-shrink-0 flex-col-reverse lg:flex-row">
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layout;
