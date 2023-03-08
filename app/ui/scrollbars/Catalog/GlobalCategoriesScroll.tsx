import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const ScrollBar = styled(OverlayScrollbarsComponent)`
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius-stat-8);
	display: flex;
	height: 420px;
	width: 320px;
`

type GlobalCategoriesScrollProps = {
	children: ReactNode
}

const GlobalCategoriesScroll: FC<GlobalCategoriesScrollProps> = ({
	children
}) => {
	return (
		<ScrollBar
			style={{}}
			options={{
				scrollbars: {
					visibility: 'visible',
					autoHide: 'leave',
					autoHideDelay: 1.5
				}
			}}
			defer
		>
			{children}
		</ScrollBar>
	)
}

export default GlobalCategoriesScroll
