import { FC } from 'react'
import { IMainSliderImages } from '@/interface/Main/Images'
import Slide from '@/component/Slider/components/Slide'
import styled from 'styled-components'

interface ISlideList {
	slideNumber: number
	items: IMainSliderImages[]
}

const SlideList = styled.div<ISlideList>`
	transform: translateX(-${p => p.slideNumber * 100}%);
	display: flex;
`

interface ISlideList {
	slideNumber: number
	items: IMainSliderImages[]
}
const SlidesList: FC<ISlideList> = ({ slideNumber, items }) => {
	return (
		<SlideList slideNumber={slideNumber} items={items}>
			{items.map((slide, index) => (
				<Slide key={index} data={slide} />
			))}
		</SlideList>
	)
}

export default SlidesList
