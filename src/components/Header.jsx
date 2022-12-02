import React from 'react';
import Search from './Search';

const Header = () => {
	return (
		<header>
			<h1>
				<span className="logo" role="img">
					☮
				</span>
				gregslist
			</h1>
			<Search />
		</header>
	);
};

export default Header;
