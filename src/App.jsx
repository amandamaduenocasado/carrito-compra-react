import { useState } from 'react';
import Cart from './components/Cart/cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ProductContainer from './components/productsContainer/productscontainer';

import { GlobalStyles } from './styles/GlobalStyles';
import { PRODUCTS } from './Constants/products';

const App = () => {
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState('default');

	const addToCart = product => {
		setCart([...cart, { ...product, quantity: 1 }]);
	};

	console.log('cart', cart);

	return (
		<>
			<GlobalStyles/>
			<Header setFilter={setFilter} filter={filter} />
			<Main>
				<ProductContainer
					isProductInCart={isProductInCart}
					removeItem={removeItem}
					cart={cart}
					setCart={setCart}
					filter={filter}
					addToCart={addToCart}
					products={filterProducts(PRODUCTS, filter)}
				/>

				<Cart
					isProductInCart={isProductInCart}
					removeItem={removeItem}
					cart={cart}
					setCart={setCart}
				/>
			</Main>
		</>
	);
};

export default App;

const filterProducts = (products, filter) => {
	const newPRODUCTS = [...products];
	if (filter === 'name') {
		return newPRODUCTS.sort((a, b) => a.name.localeCompare(b.name));
	}
	if (filter === 'price') {
		return newPRODUCTS.sort((a, b) => a.price - b.price);
	}
	return newPRODUCTS;
};

const removeItem = (id, cart, setCart) => {
	const updatedCart = cart.filter(item => item.id !== id);
	setCart(updatedCart);
};

const isProductInCart = (id, cart) => {
	const productInCart = cart.find(item => item.id === id);
	return productInCart;
};