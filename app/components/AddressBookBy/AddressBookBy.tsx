import { FC } from 'react'
import styled from 'styled-components'
import CityButton from '@/ui/buttons/Navigation/CityButton'
import CitySvg from '@/ui/svgs/Navigation/CitySvg'
import CitySpan from '@/ui/spans/Navigation/CitySpan'
import AddressBookBySvg from '@/ui/svgs/Navigation/AddressBookBySvg'
import DeliveryButton from '@/ui/buttons/Navigation/DeliveryButton'
import DeliverySpan from '@/ui/spans/Navigation/DeliverySpan'

const BookBy = styled.div`
	height: 20px;
	width: 318px;
	display: flex;
	align-items: center;
`

const AddressBookBy: FC = () => {
	const handleCityButton = () => console.log(2)

	return (
		<BookBy>
			<CityButton handleCityButton={handleCityButton}>
				<CitySvg />
				<CitySpan />
			</CityButton>
			<AddressBookBySvg />
			<DeliveryButton>
				<DeliverySpan />
			</DeliveryButton>
		</BookBy>
	)
}

export default AddressBookBy
