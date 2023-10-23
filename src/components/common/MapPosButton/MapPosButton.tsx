import { Icon, IconButton } from '@chakra-ui/react';
import { memo } from 'react';
import { IconPosition } from '~/assets/icons';

interface MapPosButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const MapPosButton = memo(({ active = false, onClick }: MapPosButtonProps) => {
  return (
    <IconButton
      bg="white"
      w="3rem"
      h="3rem"
      onClick={onClick}
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
      aria-label="map current position button"
      isRound={true}
      icon={
        <Icon
          stroke={active ? 'primary' : 'grey.300'}
          w="1.7rem"
          h="1.7rem"
          as={IconPosition}
        />
      }
    />
  );
});

export default MapPosButton;
