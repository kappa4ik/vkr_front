import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Button = styled.button`
	font-family: Roboto;
	font-size: 14px;
	cursor: pointer;
	color: var(--link-color);
	&:hover {
		color: var(--btn-add-c-pu);
	}
`

type DeliveryButtonProps = {
	children: ReactNode
}

const DeliveryButton: FC<DeliveryButtonProps> = ({ children }) => {
	return <Button>{children}</Button>
}

export default DeliveryButton
