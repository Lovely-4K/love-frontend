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
      <button
        className="group"
        onClick={() => {
          navigate(prevPageLink);
        }}
      >
        <IconLeftArrow className="h-5 w-5 fill-grey-400 group-hover:fill-base-black" />
      </button>
      <div className="text-lg lg:text-xl">{pageTitle}</div>
    </header>
  );
};

export default NavigationHeader;
