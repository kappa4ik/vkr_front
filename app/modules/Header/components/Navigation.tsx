import { FC } from 'react'
import styled from 'styled-components'
import AddressBookBy from '@/component/AddressBookBy/AddressBookBy'
import Menu from '@/components/NavigationMenu/Menu'

const Container = styled.div`
	font-size: var(--btn-add-cart-font-size);
	height: 40px;
	align-items: center;
	display: flex;
	justify-content: space-between;
	text-align: center;
`

const NavigationContainer: FC = () => {
	return (
		<Container>
			<AddressBookBy />
			<Menu />
		</Container>
	)
}

export default NavigationContainer
