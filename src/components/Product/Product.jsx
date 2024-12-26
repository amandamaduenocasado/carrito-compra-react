import {
	StyledAddButton,
	StyledCircleButton,
	StyledCircleButtonMinus,
	StyledContainer,
	StyledIconCart,
	StyledPrice,
	StyledProductBox,
	StyledProductImg,
	StyledProductInfo,
	StyledQuantityButton,
	StyledTag,
	StyledTitle
} from './product.styles';

const Product = ({
	product,
	isProductInCart,
	addToCart,
	cart,
	setCart,
	removeItem,
}) => {
	const { id, imgDesk, imgTab, imgMob, alt, tag, name, price } = product;

	const productInCart = isProductInCart(id, cart);

	const incrementQuantity = () => {
		const updatedCart = cart.map(item => 
			item.id === productInCart.id
			? { ...item, quantity: item.quantity + 1 }  
			: item  
		);
		setCart(updatedCart); 
	};

	const decrementQuantity = () => {
		if (productInCart.quantity === 1) {
			removeItem(productInCart.id, cart, setCart); 
		} else {
			const updatedCart = cart.map(item => 
				item.id === productInCart.id
				? { ...item, quantity: item.quantity - 1 }  
				: item  
			);
			setCart(updatedCart);  
		}
	};

	return (
		<StyledContainer>
			<StyledProductBox>
				<picture>
					<source media='(min-width:1024px)' srcSet={imgDesk} />
					<source media='(min-width:786px)' srcSet={imgTab} />
					<source media='(min-width:320px)' srcSet={imgMob} />
					<StyledProductImg
						src={imgMob}
						alt={alt}
						$productInCart={productInCart}
					></StyledProductImg>
				</picture>
				{productInCart && (
					<StyledQuantityButton>
						<StyledCircleButtonMinus onClick={() => decrementQuantity()}>
							<img
								src='public/assets/images/icon-decrement-quantity.svg'
								alt='Remove one'
							/>
						</StyledCircleButtonMinus>
						{productInCart.quantity}
						<StyledCircleButton onClick={() => incrementQuantity()}>
							<img
								src='/assets/images/icon-increment-quantity.svg'
								alt='Add one more'
							/>
						</StyledCircleButton>
					</StyledQuantityButton>
				)}
				{!productInCart && (
					<StyledAddButton onClick={() => addToCart(product)}>
						<StyledIconCart src='/assets/images/icon-add-to-cart.svg' /> Add to
						Cart
					</StyledAddButton>
				)}
			</StyledProductBox>
			<StyledProductInfo>
				<StyledTag>{tag}</StyledTag>
				<StyledTitle>{name}</StyledTitle>
				<StyledPrice>${price.toFixed(2)}</StyledPrice>
			</StyledProductInfo>
		</StyledContainer>
	);
};

export default Product;

