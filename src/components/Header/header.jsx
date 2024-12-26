import {
	StyledFilterBox,
	StyledHeader,
	SytledTagFilter,
	SytledTitle
} from './header.styles';

const Header = ({ setFilter, filter }) => {
	/*filtro y actualización de estado*/

	return (
		<StyledHeader>
			<SytledTitle>Desserts</SytledTitle>
			<StyledFilterBox>
				<SytledTagFilter
					$active={filter}
					$state={'default'}
					onClick={() => setFilter('default')}
				>
					Default
				</SytledTagFilter>
				<SytledTagFilter
					$active={filter}
					$state={'name'}
					onClick={() => setFilter('name')}
				>
					Name
				</SytledTagFilter>
				<SytledTagFilter
					$active={filter}
					$state={'price'}
					onClick={() => setFilter('price')}
				>
					Price
				</SytledTagFilter>
			</StyledFilterBox>
		</StyledHeader>
	);
};

export default Header;