import { useQuery } from '@tanstack/react-query';
import { SpotDiarys } from '~/types';
import apiClient from '~/api/apiClient';

interface getSpotDiarys {
  kakaoMapId: number;
}

const getSpotDiarys = async ({
  kakaoMapId,
}: getSpotDiarys): Promise<SpotDiarys> => {
  const response = await apiClient.get(`/diaries/marker/${kakaoMapId}`);

  return response.data.body as SpotDiarys;
};

const useGetSpotDiarys = ({ kakaoMapId }: getSpotDiarys) => {
  return useQuery({
    queryKey: ['Diarys', kakaoMapId],
    queryFn: () => getSpotDiarys({ kakaoMapId }),
  });
};

export default useGetSpotDiarys;
