// import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

import { useSetAtom } from 'jotai';
import { infoOpenAtom } from '~/stores/diaryAtoms';

// interface useInfoToggleProps {
//   infoOpen: DiaryContextProps['infoOpen'];
//   setInfoOpen: DiaryContextProps['setInfoOpen'];
//   setInfo: DiaryContextProps['setInfo'];
// }

// const useInfoToggle = ({
//   infoOpen,
//   setInfoOpen,
//   setInfo,
// }: useInfoToggleProps) => {
//   const toggleInfo = () => {
//     setInfoOpen(!infoOpen);
//   };

//   const closeInfo = () => {
//     setInfoOpen(false);
//   };

//   const openInfo = () => {
//     setInfoOpen(true);
//   };

//   return { toggleInfo, closeInfo, openInfo, setInfo };
// };

// export default useInfoToggle;

const useInfoToggle = () => {
  const setInfoOpen = useSetAtom(infoOpenAtom);

  const toggleInfo = () => {
    setInfoOpen(!infoOpenAtom);
  };

  const closeInfo = () => {
    setInfoOpen(false);
  };

  const openInfo = () => {
    setInfoOpen(true);
  };

  return { toggleInfo, closeInfo, openInfo };
};

export default useInfoToggle;
