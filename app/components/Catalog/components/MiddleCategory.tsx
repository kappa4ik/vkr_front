import { FC } from 'react'
import styled from 'styled-components'

const MiddleCategories = styled.div`
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius);
	height: 420px;
	width: 1072px;
`

const MiddleCategory: FC = () => {
	return <MiddleCategories>Middle</MiddleCategories>
}

export default MiddleCategory
