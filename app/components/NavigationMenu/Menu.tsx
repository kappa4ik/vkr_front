import { FC } from 'react'
import Item from '@/ui/links/Navigation/Item'
import styled from 'styled-components';

const NavigateMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  width: 512px;
`;

const Menu: FC = () => {
	const menu = [
		{ id: 1, title: 'О нас', link: '/' },
		{ id: 2, title: 'Контакты', link: '/my/delivery' },
		{ id: 3, title: 'Пункт выдачи', link: '/my/cart' }
	]

	return (
		<NavigateMenu>
			{menu.map(({ id, title, link }) => (
				<Item key={id} title={title} link={link} />
			))}
		</NavigateMenu>
	)
}

export default Menu
