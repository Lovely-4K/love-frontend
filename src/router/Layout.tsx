import { Outlet } from 'react-router';
import { Footer } from '~/components/domain';

const Layout = () => {
  return (
    <div className="flex h-screen w-screen flex-shrink-0 flex-col-reverse lg:flex-row">
      <Footer />
      <div className="mb-24 h-full w-full overflow-auto lg:ml-[7.5rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
