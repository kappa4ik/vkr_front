import React, { FC } from 'react'
import styled from 'styled-components'

interface ILogoButton {
	type: string
	onClick: () => void
}

const LogoButton = styled.button<ILogoButton>`
	width: 150px;
	height: 60px;
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius);
	cursor: pointer;
`

type IMainButton = {
	children: React.ReactNode
}

const MainButton: FC<IMainButton> = ({ children }) => {
	return (
		<LogoButton
			type='submit'
			onClick={() => window.location.assign('http://localhost:3000/')}
		>
			{children}
		</LogoButton>
	)
}

export default MainButton
