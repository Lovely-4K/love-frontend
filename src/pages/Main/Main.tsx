import { MainContent, MainProfile, MainModalButtons } from './components';
import { MainProvider } from './context/MainContext';

const MainPage = () => {
  return (
    <MainProvider>
      <div className="flex h-full w-full flex-col p-7">
        <MainModalButtons />
        <MainProfile />
        <MainContent />
      </div>
    </MainProvider>
  );
};

export default MainPage;
