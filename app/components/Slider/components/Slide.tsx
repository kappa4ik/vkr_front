import { FC } from 'react'
import { IMainSliderImages } from '@/interface/Main/Images'
import Image from 'next/image'
import { Loader } from '@/interface/ImageLoader'
import styled from 'styled-components'

const SlideContainer = styled.div`
	width: 100%;
	height: 309px;
`

interface ISlide {
	data: IMainSliderImages
}

const Slide: FC<ISlide> = ({ data }) => {
	return (
		<SlideContainer>
			<Image
				loader={Loader}
				src={data.urls}
				width={1416}
				height={309}
				alt={data.title}
			/>
		</SlideContainer>
	)
}

export default Slide
