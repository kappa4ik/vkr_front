import { FC } from 'react'
import styled from 'styled-components'

const BackContainer = styled.button`
  backface-visibility: hidden;
  height: 300px;
  width: 100%;
  position: absolute;
  transition-delay: 0.3s;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
`

const DescriptionContainer = styled.div`
  pointer-events: none;
`

const DescriptionHeader = styled.h3`
  
`

interface IBack {
  changeRotate: (a: boolean) => void,
  rotate: boolean,
  oldPrice: number
}

const Back:FC<IBack> = ({changeRotate, rotate, oldPrice}) => {

  return (
    <BackContainer
      onClick={() => changeRotate(rotate)}
      disabled={!rotate ? true : false}
    >
      <DescriptionContainer>
        <DescriptionHeader>Заголовок</DescriptionHeader>
      </DescriptionContainer>
    </BackContainer>
  )
}

export default Back