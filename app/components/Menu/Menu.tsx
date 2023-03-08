import { FC } from 'react';
import styled from 'styled-components';
import SVGMenu from '@/ui/svgs/Menu/SvgMenu';
import Item from './components/Item';

const MenuContainer = styled.div`
	display: flex;
	height: var(--full-height);
	justify-content: space-between;
	text-align: center;
	width: var(--navMenu-width);
`

const Menu:FC = () => {
  
  const navigations = [
    {
      id: 1,
      title: 'Профиль',
      link: '/my',
      width: '74px',
      svg: SVGMenu.SvgMy
    },
    {
      id: 2,
      title: 'Доставка',
      link: '/my/deliveries',
      width: '68px',
      svg: SVGMenu.SvgDelivery
    },
    {
      id: 3,
      title: 'Корзина',
      link: '/my/cart',
      width: '68px',
      svg: SVGMenu.SvgCart
    },
    {
      id: 4,
      title: 'Избранное',
      link: '/my/favorites',
      width: '89px',
      svg: SVGMenu.SvgFavourites
    }
  ]
  
  return (
    <MenuContainer>
      {navigations.map(({ id, title, link, width, svg }) => (
        <Item
          key={id}
          title={title}
          link={link}
          width={width}
          SvgComp={svg}
        />
      ))}
    </MenuContainer>
  )
}

export default Menu