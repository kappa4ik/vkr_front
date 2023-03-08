import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { IMainSliderImages } from '@/interface/Main/Images'
import Arrows from '@/component/Slider/components/Arrows'
import SlidesList from '@/component/Slider/components/SlideList'

interface ISliderContainer {
	width: string
	height: string
}

const SliderContainer = styled.div<ISliderContainer>`
	width: ${p => p.width};
	height: ${p => p.height};
  border-radius: var(--br-radius);
  overflow: hidden;
  position: relative;
`

interface ISlider {
	images: IMainSliderImages[]
	autoPlay?: boolean
	autoPlayTime?: number
	width: string
	height: string
}
const Slider: FC<ISlider> = ({
	images,
	autoPlay,
	autoPlayTime,
	width,
	height
}) => {
	const [items, setItems] = useState<IMainSliderImages[]>([])
	const [slide, setSlide] = useState(0)

	useEffect(() => {
		return setItems(images)
	}, [])

	const changeSlide = (direction: number = 1) => {
		let slideNumber: number
		if (slide + direction < 0) {
			slideNumber = items.length - 1
		} else {
			slideNumber = (slide + direction) % items.length
		}
		setSlide(slideNumber)
	}

	useEffect(() => {
		if (!autoPlay) return
		const interval: NodeJS.Timer = setInterval(() => {
			changeSlide(1)
		}, autoPlayTime)
		return () => {
			clearInterval(interval)
		}
	}, [items.length, slide])

	return (
		<>
			<SliderContainer width={width} height={height}>
				<Arrows changeSlide={changeSlide} />
				<SlidesList slideNumber={slide} items={items} />
			</SliderContainer>
		</>
	)
}

export default Slider
