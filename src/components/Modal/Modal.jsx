import { createPortal } from 'react-dom';
import {
	StyledBackground,
	StyledBox,
	StyledButton,
	StyledImg,
	StyledItem,
	StyledModal,
	StyledNumbers,
	StyledOrderTotal,
	StyledPrice,
	StyledProductInfo,
	StyledProductName,
	StyledProductsBox,
	StyledQuantity,
	StyledTotal,
	StyledTotalPrice,
	StyledTotaProductPrice
} from './modal.styles';

const Modal = ({ children, setModalOpen, setCart, cart }) => {

	return createPortal(
		<StyledBackground>
			<StyledModal>
				<img src='public/assets/images/icon-order-confirmed.svg' alt='' />
				<h1>OrderConfirmed</h1>
				<span>We hope you enjoy your food</span>
				<StyledBox>
					<StyledProductsBox>
						<StyledItem>
							<StyledImg />
							<StyledProductInfo>
								<StyledProductName>Product Name</StyledProductName>
								<StyledNumbers>
									<StyledQuantity>1x</StyledQuantity>
									<StyledPrice>@$5.50</StyledPrice>
								</StyledNumbers>
							</StyledProductInfo>
							<StyledTotaProductPrice>$5.50</StyledTotaProductPrice>
						</StyledItem>
					</StyledProductsBox>
					<StyledTotal>
						<StyledOrderTotal>Order Total</StyledOrderTotal>
						<StyledTotalPrice>$46.50</StyledTotalPrice>
					</StyledTotal>
				</StyledBox>
				<StyledButton
					onClick={() => {
						setModalOpen(false), setCart([]);
					}}
				>
					Start New Order
				</StyledButton>
			</StyledModal>
		</StyledBackground>,

		document.getElementById('modal')
	);
};

export default Modal;