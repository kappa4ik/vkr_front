import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IButton {
	type: string
	onClick: () => void
}

const Button = styled.button<IButton>`
	padding: 0;
	width: 120px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		color: var(--btn-add-c-pu);
	}
`

type CityButtonProps = {
	children: ReactNode
	handleCityButton: () => void
}

const CityButton: FC<CityButtonProps> = ({ children, handleCityButton }) => {
	return (
		<Button type='submit' onClick={handleCityButton}>
			{children}
		</Button>
	)
}

export default CityButton
