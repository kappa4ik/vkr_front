import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const CatalogMenu = styled.div`
	user-select: none;
	-moz-user-select: none;
	-khtml-user-select: none;
  z-index: 999;
	align-items: center;
	position: absolute;
	margin-top: 550px;
	height: 450px;
	width: var(--root-width);
	display: flex;
	justify-content: space-evenly;
	background-color: var(--theme-bgc);
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius);
`

type MenuProps = {
	children: ReactNode
	close: boolean
}

const CatalogDropMenu: FC<MenuProps> = ({ children, close }) => {
	return (
		<CatalogMenu style={{ display: close ? 'none' : '' }}>
			{children}
		</CatalogMenu>
	)
}

export default CatalogDropMenu
