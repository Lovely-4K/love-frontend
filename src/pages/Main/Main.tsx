import { MainContent, MainModalButtons, MainProfile } from './components';
import { MainProvider, ProfileProvider } from './contexts';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-col p-3 md:p-7 lg:justify-between">
      <MainProvider>
        <ProfileProvider>
          <MainModalButtons />
          <MainProfile />
        </ProfileProvider>
        <MainContent />
      </MainProvider>
    </div>
  );
};

export default MainPage;
