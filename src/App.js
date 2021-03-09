import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import RenderMarkers from './RenderMarkers';

function App() {
	let [eventList, setEventList] = useState([]);

	useEffect(() => {
		fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
			.then(res => res.json())
			.then(data => {
				setEventList(data.events);
				//console.log(data.events);
			})
			.catch(console.log);
	}, []);

	return (
		<main>
			<header>
				<h1>Natural Events Tracker</h1>
			</header>
			<MapContainer style={{ height: '100vh' }} center={[-21.505, 10.09]} zoom={2} scrollWheelZoom={false} zoomControl={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					noWrap={false}
				/>
				<ZoomControl position={'bottomright'} />
				<RenderMarkers events={eventList} name='random name' />
			</MapContainer>
			<footer>
				Built by <a href='https://linktr.ee/pulkit_jasti'>Pulkit Jasti</a> | Source: <a href='https://github.com/pulkit-jasti'>GitHub</a> |
				Icons made by{' '}
				<a href='https://www.freepik.com' title='Freepik'>
					Freepik
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
			</footer>
		</main>
	);
}

export default App;
