import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { colors, fontSize, screens } from '~/theme';
import { SETTING_TAB } from '../constants';
import { activeTabAtom } from '../stores/settingAtom';
import { useGetCoupleProfile } from '~/services/couple';

const StyledTab = styled.label`
  font-size: ${() => fontSize.sm};
  width: 6rem;
  height: 2rem;
  text-align: center;
  font-weight: 100;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1;
  input[type='radio']:checked + & {
    font-weight: 700;
    border-bottom: 3px solid ${colors.base.primary};
    color: ${colors.base.primary};
  }
  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize.base};
    height: 2.5rem;
    width: 7rem;
  }
`;

const SettingTab = () => {
  const { data: coupleProfile } = useGetCoupleProfile();

  const coupleMode = coupleProfile.coupleStatus;
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <div className="flex">
      {Object.keys(SETTING_TAB).map((tab) => {
        if (coupleMode === 'RELATIONSHIP' && tab === 'REACTIVE') return null;
        if (coupleMode !== 'RELATIONSHIP' && tab === 'INACTIVE') return null;

        return (
          <Fragment key={tab}>
            <input
              type="radio"
              id={tab}
              name="setting_tab"
              className="hidden"
              checked={activeTab === tab}
              onChange={() => setActiveTab(tab as keyof typeof SETTING_TAB)}
            />
            <StyledTab htmlFor={tab}>
              {SETTING_TAB[tab as keyof typeof SETTING_TAB]}
            </StyledTab>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SettingTab;
