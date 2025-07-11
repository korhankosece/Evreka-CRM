import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { User } from '../../../types';

import { MapWrapper } from './UserLocationMap.styles';

interface UserLocationMapProps {
  user: User;
}

const UserLocationMap = ({ user }: UserLocationMapProps) => {
  return (
    <MapWrapper>
      <MapContainer
        center={[user.coordinates.lat, user.coordinates.lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[user.coordinates.lat, user.coordinates.lng]}>
          <Popup>
            {user.name}
            <br />
            {user.email}
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default UserLocationMap;
