import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ICatalogButton {
	onClick: () => void
}

const CatalogButton = styled.button<ICatalogButton>`
	width: 149px;
	height: 60px;
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`

type MainCatalogProps = {
	children: ReactNode
	openingMenuCatalog: () => void
}

const MainCatalog: FC<MainCatalogProps> = ({
	children,
	openingMenuCatalog
}) => {
	return <CatalogButton onClick={openingMenuCatalog}>{children}</CatalogButton>
}

export default MainCatalog
