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
			<h2>Events List</h2>
			<div className='list-container'>
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
				<SideBarItem />
			</div>
		</div>
	);
};

export default SideBar;
