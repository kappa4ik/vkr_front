import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IMenuItem {
  href: string
  width: string
}

const MenuItem = styled(Link)<IMenuItem>`
	height: calc(var(--full-height) - 5px);
	text-decoration: none;
	-webkit-user-select: none;
	user-select: none;
`

const ItemSpan = styled.span`
	height: 19px;
	padding: 0;
	-webkit-user-select: none;
	user-select: none;
	width: 100%;
`

type ItemProps = {
  title: string
  link: string
  width: string
  SvgComp: FC
}

const Item: FC<ItemProps> = ({ title, link, width, SvgComp }) => {
  return (
    <MenuItem href={link} width={width}>
      <SvgComp />
      <ItemSpan>{title}</ItemSpan>
    </MenuItem>
  )
}

export default Item