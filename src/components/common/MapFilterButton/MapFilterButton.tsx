import { Icon, IconButton, chakra } from '@chakra-ui/react';
import { memo } from 'react';
import { IconHeart } from '~/assets/icons';

interface MapFilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: 'all' | 'visited' | 'unvisited';
}

const AllIcon = memo(() => (
  <chakra.div position="relative" w="full" h="full">
    <Icon
      left="0.5rem"
      top="50%"
      transform="translateY(-50%)"
      position="absolute"
      as={IconHeart}
      w="1.5rem"
      h="1.5rem"
      right="100"
      stroke="primary"
      fill="primary"
      zIndex="1"
    />
    <Icon
      position="absolute"
      top="50%"
      right="0.5rem"
      transform="translateY(-50%)"
      as={IconHeart}
      w="1.5rem"
      h="1.5rem"
      stroke="grey.300"
      fill="grey.300"
    />
  </chakra.div>
));

const MapFilterButton = memo(
  ({ state = 'all', onClick }: MapFilterButtonProps) => {
    return (
      <IconButton
        bg="white"
        w="3rem"
        h="3rem"
        onClick={onClick}
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
        aria-label="map marker filter button"
        isRound={true}
        icon={
          state === 'all' ? (
            <AllIcon />
          ) : (
            <Icon
              fill={state === 'visited' ? 'primary' : 'grey.300'}
              stroke={state === 'visited' ? 'primary' : 'grey.300'}
              w="1.5rem"
              h="1.5rem"
              as={IconHeart}
            />
          )
        }
      />
    );
  },
);

export default MapFilterButton;
