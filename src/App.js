import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import RenderMarkers from './RenderMarkers';

function App() {
	let [eventList, setEventList] = useState([]);

	useEffect(() => {
		fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8')
			.then(res => res.json())
			.then(data => {
				setEventList(data.events);
			})
			.catch(console.log);
	}, []);

	return (
		<div>
			<MapContainer style={{ height: '100vh' }} center={[11.505, 10.09]} zoom={2} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<RenderMarkers events={eventList} name='random name' />
			</MapContainer>
		</div>
	);
}

export default App;
