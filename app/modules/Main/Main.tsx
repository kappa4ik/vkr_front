import { FC } from 'react'
import Slider from '@/component/Slider/Slider'
import { images } from '@/interface/Main/Images'
import styled from 'styled-components';
import TwiceGroup from '@/component/TwiceGroup/TwiceGroup';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main: FC = () => {
	return (
		<MainContainer>
			<Slider
				images={images}
				autoPlay={true}
				autoPlayTime={5000}
				width={'1416px'}
				height={'309px'}
			/>
			<TwiceGroup
      
      />
			<span>Poster</span>
			<span>Twice lines products</span>
			<span>Triple poster</span>
			<span>Twice lines products</span>
			<span>Categories</span>
			<span>Small group products</span>
		</MainContainer>
	)
}

export default Main
