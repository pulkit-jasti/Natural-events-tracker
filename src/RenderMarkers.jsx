import { Renderer } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import Icon from './Icon';

const RenderMarkers = props => {
	console.log(props.events.length);

	return (
		<div>
			{/* <Marker position={[0, 0]} icon={Icon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker> */}
			{/* {events.forEach(el => console.log(el))} */}
			{/* {console.log(typeof events)} */}
		</div>
	);
};

export default RenderMarkers;
