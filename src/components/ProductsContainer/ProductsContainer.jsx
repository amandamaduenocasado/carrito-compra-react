import Product from '../Product/Product';
import { StyledProductsContainer } from './productsContainer.styles';

const ProductsContainer = ({
	addToCart,
	products,
	setCart,
	cart,
	isProductInCart,
	removeItem
}) => {
	return (
		<StyledProductsContainer>
			{products.map(product => (
				<Product
					key={product.id}
					cart={cart}
					setCart={setCart}
					isProductInCart={isProductInCart}
					product={product}
					addToCart={addToCart}
					removeItem={removeItem}
				/>
			))}
		</StyledProductsContainer>
	);
};

export default ProductsContainer;