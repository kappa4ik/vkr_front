import { FC } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

interface IArrowsContainer{
  changeSlide: (direction: number) => void
}

const ArrowsContainer = styled.div<IArrowsContainer>`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 42%;
  height: 30px;
  width: 1416px;
  z-index: 1;
`

const ArrowLeft = styled(FaChevronLeft)`
  user-select: none;
  height: 30px;
  width: 30px;
  :hover{
    cursor: pointer;
  }
`

const ArrowRight = styled(FaChevronRight)`
  user-select: none;
  height: 30px;
  width: 30px;
  :hover{
    cursor: pointer;
  }
`

interface IArrows {
  changeSlide: (direction: number) => void
}

const Arrows: FC<IArrows> = ({changeSlide}) => {
	return (
		<ArrowsContainer changeSlide={changeSlide}>
      <ArrowLeft onClick={() => changeSlide(-1)}/>
			<ArrowRight onClick={() => changeSlide(1)} />
		</ArrowsContainer>
	)
}

export default Arrows
