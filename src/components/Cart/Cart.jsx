import { useState } from 'react';
import {
	StyledCarbon,
	StyledCarbonText,
	StyledCarbonTxtBold,
	StyledCardTitle,
	StyledCartContainer,
	StyledCartItemsBox,
	StyledQuantityBox,
	StyledQuantityCart,
	StyledEmptyCart,
	StyledEmptyCartText,
	StyledFullCart,
	StyledImgCart,
	StyledItem,
	StyledItemInfo,
	StyledOrderButton,
	StyledOrderTotal,
	StyledCartPrice,
	StyledPriceTotalProduct,
	StyledRemoveCart,
	StyledTitleCart,
	StyledTotal,
	StyledTotalPrice
} from './cart.styles';
import Modal from '../Modal/Modal';

const Cart = ({ setCart, cart, removeItem }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const isCartEmpty = cart.length === 0;
	const totalPrice = cart => {
		return cart.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		);
	};
	return (
		<>
			<StyledCartContainer>
				<StyledCardTitle> Your Cart ({cart.length}) </StyledCardTitle>
				{isCartEmpty && (
					<StyledEmptyCart>
						<StyledImgCart
							src='public/assets/images/illustration-empty-cart.svg'
							alt='Empty cart'
						/>
						<StyledEmptyCartText>
							Your added items will appear here
						</StyledEmptyCartText>
					</StyledEmptyCart>
				)}
				{!isCartEmpty && (
					<StyledFullCart>
						<StyledCartItemsBox>
							{cart.map(item => (
								<StyledItem key={item.id}>
									<StyledItemInfo>
										<StyledTitleCart>{item.name}</StyledTitleCart>
										<StyledQuantityBox>
											<StyledQuantityCart>{item.quantity}x</StyledQuantityCart>
											<StyledCartPrice>
												@${item.price.toFixed(2)}
											</StyledCartPrice>
											<StyledPriceTotalProduct>
												${(item.price * item.quantity).toFixed(2)}
											</StyledPriceTotalProduct>
										</StyledQuantityBox>
									</StyledItemInfo>
									<StyledRemoveCart
										onClick={() => removeItem(item.id, cart, setCart)}
										src='public/assets/images/icon-remove-item.svg'
										alt='Remove item'
									/>
								</StyledItem>
							))}
						</StyledCartItemsBox>
						<StyledTotal>
							<StyledOrderTotal>Order Total</StyledOrderTotal>
							<StyledTotalPrice>
								${totalPrice(cart).toFixed(2)}
							</StyledTotalPrice>
						</StyledTotal>
						<StyledCarbon>
							<img src='public/assets/images/icon-carbon-neutral.svg' alt='' />
							<StyledCarbonText>
								This is a{' '}
								<StyledCarbonTxtBold>carbon-neutral </StyledCarbonTxtBold>
								delivery
							</StyledCarbonText>
						</StyledCarbon>
						<StyledOrderButton onClick={() => setModalOpen(true)}>
							Confirm Order
						</StyledOrderButton>
					</StyledFullCart>
				)}
			</StyledCartContainer>
			{modalOpen && (
				<Modal setModalOpen={setModalOpen} setCart={setCart} cart={cart} />
			)}
		</>
	);
};

export default Cart;