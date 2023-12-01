interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Position {
  coords: Coordinates;
}

interface CustomCoordinates {
  lat: number;
  lng: number;
}

interface UserPosition {
  userPosition: CustomCoordinates | null;
}

interface MapMarker {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  address: string;
  spotId: string;
}

export type {
  Coordinates,
  Position,
  CustomCoordinates,
  UserPosition,
  MapMarker,
};
