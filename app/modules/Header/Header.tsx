import { FC } from 'react'
import MainHeader from '@/modules/Header/components/MainHeader';
import Navigation from '@/modules/Header/components/Navigation';
import styled from 'styled-components';

const PageTop = styled.div`
  height: 130px;
  margin-bottom: 30px;
`;

const Header: FC = () => {
  return (
    <PageTop>
      <Navigation />
      <MainHeader />
    </PageTop>
  )
}

export default Header
