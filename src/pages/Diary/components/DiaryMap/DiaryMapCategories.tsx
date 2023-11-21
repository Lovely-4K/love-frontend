import styled from '@emotion/styled';
import { colors } from '~/theme';
import CategoryList from '~/components/domain/CategoryList/CategoryList';

const MapCategories = styled.div`
  position: absolute;
  left: 50%;
  top: 1rem;
  z-index: 50;
  width: 19rem;
  transform: translateX(-50%);
  border: 1px solid ${colors.grey[200]};
  border-radius: 0.75rem;
  background-color: ${colors.base.white};
  padding-top: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DiaryMapCategories = () => {
  return (
    <MapCategories>
      <CategoryList />
    </MapCategories>
  );
};

export default DiaryMapCategories;
