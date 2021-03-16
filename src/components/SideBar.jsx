import { useState } from 'react';
import SideBarItem from './SideBarItem';

const SideBar = ({ events }) => {
	let [sideBarState, setSideBarState] = useState(true);

	function toggleSideBar() {
		setSideBarState(!sideBarState);
	}

	return (
		<div className={sideBarState ? 'side-bar' : 'side-bar closed'}>
			<button onClick={toggleSideBar}>
				{/* <div>&#9660;</div> */}
				<div>&#9660;</div>
			</button>
			{console.log(events)}
			<SideBarItem />
		</div>
	);
};

export default SideBar;
