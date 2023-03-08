import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IMenuItem {
  href: string;
}

const MenuItem = styled(Link)<IMenuItem>`
  align-items: center;
  color: var(--text-c);
  display: flex;
  justify-content: center;
  height: 20px;
  width: 165px;
  text-decoration: none;
  user-select: none;
  border: 1px solid #fff;
  &:hover{
    border: 1px solid var(--btn-add-c-pu);
    border-radius: 30px;
    color: var(--btn-add-c-pu);
  }
`;

type ItemProps = {
  link: string,
  title: string
}

const Item:FC<ItemProps> = ({link, title}) => {
  return (
    <MenuItem href={link}>
      <span>{title}</span>
    </MenuItem>
  );
};

export default Item;