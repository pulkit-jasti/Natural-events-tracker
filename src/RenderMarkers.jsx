import { Renderer } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import Icon from './Icon';

const RenderMarkers = ({ events }) => {
	return (
		<div>
			{events.map(el => {
				let coordinates = el.geometries[0].coordinates;
				return (
					<Marker position={[coordinates[1], coordinates[0]]} icon={Icon} key={el.id}>
						<Popup>{el.title}</Popup>
					</Marker>
				);
			})}
		</div>
	);
};

export default RenderMarkers;
