import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import '@styles/Header.scss';

import menuImg from '@icons/icon_menu.svg';
import logoImg from '@logos/logo_yard_sale.svg';
import shoppingCartImg from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav>
			<img src={menuImg} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logoImg} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email pointer" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li 
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCartImg} alt="shopping cart" className="pointer" />
						{ state.cart.length > 0 ? 
							<div>{state.cart.length}</div> : 
							null 
						}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
		</nav>
	);
}

export default Header;
