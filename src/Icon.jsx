import L from 'leaflet';
import fireIcon from './fire.svg';

const Icon = new L.Icon({
	iconUrl: fireIcon,
	iconRetinaUrl: fireIcon,
	//iconUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/fire.svg',
	//iconRetinaUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/fire.svg',
	iconAnchor: null,
	popupAnchor: [0, -20],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 30),
	className: 'leaflet-div-icon',
});

export default Icon;
