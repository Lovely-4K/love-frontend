import { MainProfileModal } from './components/MainProfileModal';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-shrink flex-col justify-center overflow-y-auto overflow-x-hidden md:items-center">
      <MainProfileModal />
    </div>
  );
};

export default MainPage;
