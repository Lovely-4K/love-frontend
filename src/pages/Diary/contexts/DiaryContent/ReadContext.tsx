// import { PropsWithChildren, createContext, useContext, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import type { DiaryContent } from '~/types';
// import useDiaryContext from '../../hooks/Diary/useDiaryContext';
// import { DiaryContentContext } from './DiaryContentContext';
// import useGetDiaryDetail from '~/services/diary/useGetDiaryDetail';

// interface ReadContextProps {}
// interface ReadProviderProps extends PropsWithChildren {}

// const ReadContext = createContext<null | ReadContextProps>(null);

// const ReadProvider = ({ children }: ReadProviderProps) => {
//   const locate = useLocation();
//   const params = useParams();
//   const { diaryId } = params;
//   const { info, map, setInfo, setRootDiarys, setInfoOpen } = useDiaryContext();
//   const { data: diaryResponse } = useGetDiaryDetail({ diaryId });
//   const diaryContentContext = useContext(DiaryContentContext);

//   if (diaryContentContext === null) throw new Error('');

//   const { setDiary } = diaryContentContext;

//   useEffect(() => {
//     const { kakaoMapId, placeName, latitude, longitude } = diaryResponse;

//     setDiary({ ...diaryResponse });

//     if (locate.state) {
//       const diary = locate.state.diary as DiaryContent;

//       setInfo({
//         address: diary.address,
//         spotId: String(kakaoMapId),
//         content: placeName,
//         position: {
//           lat: latitude,
//           lng: longitude,
//         },
//       });
//     }
//   }, [diaryResponse, setDiary, setInfo, locate.state]);

//   useEffect(() => {
//     if (locate.state && info && map) {
//       const diary = locate.state.diary as DiaryContent;
//       const newLatLng = new kakao.maps.LatLng(
//         info.position.lat,
//         info.position.lng,
//       );

//       map?.setCenter(newLatLng);
//       setRootDiarys([diary]);
//       setInfoOpen(true);
//     }
//   }, [info, map, setInfoOpen, setRootDiarys, locate.state]);

//   return <ReadContext.Provider value={{}}>{children}</ReadContext.Provider>;
// };

// export default ReadProvider;
