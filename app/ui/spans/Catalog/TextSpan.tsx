import { FC } from 'react'
import styled from 'styled-components'

const CatalogSpan = styled.span`
	color: var(--text-c);
	font-family: Roboto;
	font-size: 21px;
	height: 25px;
	width: 87px;
`

type TextSpanProps = {
	close: boolean
}

const TextSpan: FC<TextSpanProps> = ({ close }) => {
	return (
		<CatalogSpan
			style={{
				color: close ? 'var(--text-c)' : 'var(--btn-add-c-pu)'
			}}
		>
			Catalog
		</CatalogSpan>
	)
}

export default TextSpan
