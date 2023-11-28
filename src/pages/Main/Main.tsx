import { MainContent, MainModalButtons, MainProfile } from './components';
import { MainProvider, ProfileProvider } from './contexts';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-col p-3 md:justify-between md:p-7">
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
