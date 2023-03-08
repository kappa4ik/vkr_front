import { FC } from 'react'
import styled from 'styled-components'
import SearchForm from '@/component/SearchForm/SearchFrom';
import Logo from '@/component/Logo/Logo';
import Menu from '@/component/Menu/Menu';
import Catalog from '@/component/Catalog/Catalog';

const Header = styled.header`
	--cat-log-width: 149px;
	--search-width: 716px;
	--navMenu-width: 356px;
	--full-height: 60px;
	--el-height: 58px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: var(--full-height);
`

const MainHeader: FC = () => {
	return (
		<Header>
      <Logo />
      <Catalog />
			<SearchForm />
      <Menu />
		</Header>
	)
}

export default MainHeader
