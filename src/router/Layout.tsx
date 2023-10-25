import { Outlet } from 'react-router';
import { Footer } from '~/components/domain';

const Layout = () => {
  return (
    <div className="flex h-full w-full flex-col-reverse lg:flex-row">
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layout;
