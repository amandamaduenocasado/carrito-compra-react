import { v4 } from 'uuid';

export const PRODUCTS = [
	{
		id: v4(),
		name: 'Waffle with Berries',
		tag: 'Waffle',
		price: 6.5,
		sugarless: true,
		imgMob: '/assets/images/image-waffle-mobile.jpg',
		imgTab: '/assets/images/image-waffle-tablet.jpg',
		imgDesk: '/assets/images/image-waffle-desktop.jpg',
		alt: 'A waffle tower with sliced strawberries and icing sugar.'
	},

	{
		id: v4(),
		name: 'Vanilla Bean Crème Brûlée',
		tag: 'Crème Brûlée',
		price: 7.0,
		sugarless: true,
		imgMob: '/assets/images/image-creme-brulee-mobile.jpg',
		imgTab: '/assets/images/image-creme-brulee-tablet.jpg',
		imgDesk: '/assets/images/image-creme-brulee-desktop.jpg',
		alt: 'Two dishes of crréme brûlée topped with berries, figs and mint.'
	},

	{
		id: v4(),
		name: 'Macaron Mix of Five',
		tag: 'Macaron',
		price: 8.0,
		sugarless: false,
		imgMob: '/assets/images/image-macaron-mobile.jpg',
		imgTab: '/assets/images/image-macaron-tablet.jpg',
		imgDesk: '/assets/images/image-macaron-desktop.jpg',
		alt: 'Five diferent flavour macarons.'
	},

	{
		id: v4(),
		name: 'Classic Tiramisu',
		tag: 'Tiramisu',
		price: 5.5,
		sugarless: false,
		imgMob: '/assets/images/image-tiramisu-mobile.jpg',
		imgTab: '/assets/images/image-tiramisu-tablet.jpg',
		imgDesk: '/assets/images/image-tiramisu-desktop.jpg',
		alt: 'A tiramusú topped with berries, mint and cocoa powder.'
	},

	{
		id: v4(),
		name: 'Pistachio Baklava',
		tag: 'Baklava',
		price: 4.0,
		sugarless: true,
		imgMob: '/assets/images/image-baklava-mobile.jpg',
		imgTab: '/assets/images/image-baklava-tablet.jpg',
		imgDesk: '/assets/images/image-baklava-desktop.jpg',
		alt: 'Three triangle shaped baklavas topped with crushed pistachos.'
	},

	{
		id: v4(),
		name: 'Lemon Meringue Pie',
		tag: 'Pie',
		price: 5.0,
		sugarless: true,
		imgMob: '/assets/images/image-meringue-mobile.jpg',
		imgTab: '/assets/images/image-meringue-tablet.jpg',
		imgDesk: '/assets/images/image-meringue-desktop.jpg',
		alt: 'A slice of lemon pie coronated with meringue.'
	},

	{
		id: v4(),
		name: 'Red Velvet Cake',
		tag: 'Cake',
		price: 4.5,
		sugarless: false,
		imgMob: '/assets/images/image-cake-mobile.jpg',
		imgTab: '/assets/images/image-cake-tablet.jpg',
		imgDesk: '/assets/images/image-cake-desktop.jpg',
		alt: 'Red velvet cake portion withb sliced strawberries on the inside and a berrie on top.'
	},

	{
		id: v4(),
		name: 'Salted Caramel Brownie',
		tag: 'Brownie',
		price: 5.5,
		sugarless: false,
		imgMob: '/assets/images/image-brownie-mobile.jpg',
		imgTab: '/assets/images/image-brownie-tablet.jpg',
		imgDesk: '/assets/images/image-brownie-desktop.jpg',
		alt: 'A portion of brownie with a vanilla ice cream and caramel sirup.'
	},

	{
		id: v4(),
		name: 'Vanilla Panna Cotta',
		tag: 'Panna Cotta',
		price: 6.5,
		sugarless: true,
		imgMob: '/assets/images/image-panna-cotta-mobile.jpg',
		imgTab: '/assets/images/image-panna-cotta-tablet.jpg',
		imgDesk: '/assets/images/image-panna-cotta-desktop.jpg',
		alt: 'Two cristal jars of pannacotta with cream.'
	}
];