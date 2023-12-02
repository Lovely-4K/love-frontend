import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { LayoutProvider } from '~/contexts';
import { Loading } from '~/components/common';
import { Footer } from '~/components/domain';

const Layout = () => {
  return (
    <div className="flex h-screen w-screen flex-col-reverse lg:flex-row">
      <Footer />
      <div className="mb-[4.7rem] h-full w-full overflow-auto lg:ml-[7.5rem]">
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <Loading size="large" />
            </div>
          }
        >
          <LayoutProvider>
            <Outlet />
          </LayoutProvider>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
