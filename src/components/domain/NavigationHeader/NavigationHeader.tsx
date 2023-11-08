import { useNavigate } from 'react-router-dom';
import { IconLeftArrow } from '~/assets/icons';

interface NavigationHeader {
  prevPageLink: string;
  pageTitle: string;
}

const NavigationHeader = ({ prevPageLink, pageTitle }: NavigationHeader) => {
  const navigate = useNavigate();

  return (
    <header className="mb-5 flex w-full items-center gap-3">
      <div className="box-content cursor-pointer rounded-full px-2 py-2 hover:bg-grey-100">
        <IconLeftArrow
          onClick={() => {
            navigate(prevPageLink);
          }}
          className="h-5 w-5  fill-grey-400 "
        />
      </div>
      <div className="font-title lg:font-title-large">{pageTitle}</div>
    </header>
  );
};

export default NavigationHeader;
