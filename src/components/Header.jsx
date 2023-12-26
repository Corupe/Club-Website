import React from 'react';
import '../styles/Header.scss';
const Header = () => {
	return (
		<header>
			<div className='logo-container'>
				{/* <div className='logo'></div> */}
				<h3>AFAK Club</h3>
			</div>
			<div className='list-container'>
				<ul>
					<li>
						<a href=''>about</a>
					</li>
					<li>
						<a href=''>Events</a>
					</li>
					<li>
						<a href=''>News</a>
					</li>
				</ul>
			</div>
			<div className='buttons'>
				<a href=''>
					<button>contact</button>
				</a>
				<a href=''>
					<button>sponsor</button>
				</a>
				<a href=''>
					<button>Request</button>
				</a>
			</div>
		</header>
	);
};

export default Header;
