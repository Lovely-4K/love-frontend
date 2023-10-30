import styled from '@emotion/styled';
import { memo } from 'react';

interface MainProfileProps {
  name: string;
  mbti: string;
  picture: string;
}

const MainProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const MainProfile = memo(({ name, mbti, picture }: MainProfileProps) => {
  return (
    <MainProfileContainer>
      <div className="avatar">
        <div className="avatar-extra-large rounded-full">
          <img src={picture} />
        </div>
      </div>
      <span className="font-title font-bold">{name}</span>
      <span className="font-medium text-grey-500">{mbti}</span>
    </MainProfileContainer>
  );
});

export default MainProfile;
