import { FC } from 'react'
import styled from 'styled-components'

const Span = styled.span`
	width: 155px;
`

const DeliverySpan: FC = () => {
	return <Span>Укажите адрес доставки</Span>
}

export default DeliverySpan
