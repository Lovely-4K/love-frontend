import { MainContent, MainModalButtons, MainProfile } from './components';
import { MainContentProvider, MainProvider, ProfileProvider } from './contexts';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-col p-3 lg:p-7">
      <MainProvider>
        <ProfileProvider>
          <MainModalButtons />
          <MainProfile />
        </ProfileProvider>
        <MainContentProvider>
          <MainContent />
        </MainContentProvider>
      </MainProvider>
    </div>
  );
};

export default MainPage;
