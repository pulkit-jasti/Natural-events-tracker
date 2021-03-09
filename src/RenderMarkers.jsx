import { Marker, Popup } from 'react-leaflet';
import Icon from './Icon';

const RenderMarkers = ({ events }) => {
	//console.log(events);
	let count = 0;
	return (
		<div>
			{events.map(el => {
				console.log(el.categories[0].id);

				if (el.geometries[0].type !== 'Polygon') {
					let coordinates = el.geometries[0].coordinates;
					//console.log(coordinates, count++);

					return (
						<Marker position={[coordinates[1], coordinates[0]]} icon={Icon} key={el.id}>
							<Popup>{el.title}</Popup>
						</Marker>
					);
				}
			})}
		</div>
	);
};

export default RenderMarkers;
