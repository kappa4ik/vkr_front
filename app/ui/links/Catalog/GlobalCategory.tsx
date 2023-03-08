import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface IGlobalCategory {
	href: string
}

const Category = styled(Link)<IGlobalCategory>`
	align-items: center;
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius);
	display: flex;
	height: 31px;
	justify-content: center;
	margin: 9px 0;
	text-decoration: none;
	width: 272px;
`

type GlobalCategoryProps = {
	link: string
	title: string
}

const GlobalCategory: FC<GlobalCategoryProps> = ({ link, title }) => {
	return (
		<Category href={link}>
			<span>{title}</span>
		</Category>
	)
}

export default GlobalCategory
