import { useSuspenseQuery } from '@tanstack/react-query';
import { SpotDiaries } from '~/types';
import apiClient from '~/api/apiClient';

interface getSpotDiarys {
  kakaoMapId: number;
}

const getSpotDiarys = async ({
  kakaoMapId,
}: getSpotDiarys): Promise<SpotDiaries> => {
  const response = await apiClient.get(`/diaries/marker/${kakaoMapId}`);

  return response.data.body;
};

const useGetSpotDiarys = ({ kakaoMapId }: getSpotDiarys) => {
  return useSuspenseQuery({
    queryKey: ['DiarySpot', kakaoMapId],
    queryFn: () => getSpotDiarys({ kakaoMapId }),
  });
};

export default useGetSpotDiarys;
