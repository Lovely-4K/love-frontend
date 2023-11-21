import styled from '@emotion/styled';
import { colors } from '~/theme';
import DiaryMapCategoryList from '~/pages/Diary/components/DiaryMap/DiaryMapCategoryList';

const MapCategories = styled.div`
  position: absolute;
  left: 50%;
  top: 1rem;
  z-index: 50;
  width: 14rem;
  transform: translateX(-50%);
  border: 1px solid ${colors.grey[200]};
  border-radius: 0.75rem;
  background-color: ${colors.base.white};
  padding: 0.5rem 0.7rem 0rem 0.7rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DiaryMapCategories = () => {
  return (
    <MapCategories>
      <DiaryMapCategoryList />
    </MapCategories>
  );
};

export default DiaryMapCategories;
