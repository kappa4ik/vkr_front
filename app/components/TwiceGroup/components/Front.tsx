import { FC } from 'react'
import styled from 'styled-components'

const FrontContainer = styled.div`
  backface-visibility: hidden;
  height: 300px;
  width: 100%;
  position: absolute;
  transition-delay: 0.3s;
`
const AllPhotoContainer = styled.div`
  border-bottom: 1px solid var(--text-c);
  height: 230px;
  display: flex;
  justify-content: center;
  width: 230px;
`
const PhotoContainer = styled.button`
  display: flex;
  height: 216px;
  justify-content: start;
  margin-top: 5px;
  :disabled{
    color: var(--text-c);
    background-color: inherit;
  }
`
const Photo = styled.div`
  background-color: aqua;
  border-radius: var(--br-radius);
  height: 216px;
  width: 221px;
  pointer-events: none;
`
const PhotoSaleContainer = styled.div`
  pointer-events: none;
  align-items: center;
  align-self: flex-end;
  background-color: var(--red);
  border-bottom-left-radius: var(--br-radius);
  border-bottom-right-radius: var(--br-radius);
  border-top-left-radius: var(--br-radius);
  display: flex;
  height: 20px;
  justify-content: center;
  margin: 0 0 3px 4px;
  position: absolute;
  width: 51px;
`
const PhotoSale = styled.span`
  user-select: none;
  font-family: Inter,sans-serif;
  font-size: var(--link-font-size);
`
const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 58px;
  justify-content: space-evenly;
  margin: 7px 4px 0;
  text-align: center;
  width: 220px;
`
const PriceAndAddCart = styled.div`
  display: flex;
  flex-direction: row;
  height: 23px;
  justify-content: space-evenly;
`
const Price = styled.div`
  border: 1px solid var(--btn-add-c-pu);
  border-bottom-left-radius: var(--br-radius);
  border-top-left-radius: var(--br-radius);
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 127px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`
const NewPrice = styled.div`
  margin-right: 5px;
  margin-top: 1px;
`
const New = styled.span`
  user-select: none;
  color: var(--text-c);
  font-size: var(--prod-font-size);
`
const OldPrice = styled.div`
  text-decoration: line-through;
  -webkit-text-decoration-color: red;
  text-decoration-color: red;
`
const Old = styled.span`
  pointer-events: none;
  user-select: none;
  color: var(--text-c);
  font-size: var(--prod-old-font-size);
`
const AddCart = styled.button`
  background: none;
  border: 1px solid var(--btn-add-c-pu);
  border-bottom-right-radius: var(--br-radius);
  border-top-right-radius: var(--br-radius);
  margin-left: 5px;
  width: 86px;
  cursor: pointer;
`
const Add = styled.span`
  user-select: none;
  color: var(--text-c);
  font-size: var(--price-prod-font-size);
`
const NameContainer = styled.div`
  align-items: center;
  border: 1px solid var(--br-c-prod);
  border-radius: var(--br-radius);
  display: flex;
  height: 23px;
  justify-content: center;
  width: 221px;
`
const Name = styled.span`
  user-select: none;
  pointer-events: none;
  color: var(--text-c);
`

interface IFront {
  changeRotate: (a: boolean) => void,
  rotate: boolean,
  price: number,
  oldPrice: number,
  sale: number,
  title: string,
}

const Front:FC<IFront> = ({changeRotate, rotate, price, sale, oldPrice, title}) => {

  return (
    <FrontContainer>
      <AllPhotoContainer>
        <PhotoContainer
          onClick={() => changeRotate(rotate)}
          disabled={rotate ? true : false}
        >
          <Photo>
            
          </Photo>
          <PhotoSaleContainer>
            <PhotoSale>{-sale}%</PhotoSale>
          </PhotoSaleContainer>
        </PhotoContainer>
      </AllPhotoContainer>
      <MainContainer className='sfdhwo2'>
        <PriceAndAddCart className='sfdhwo2'>
          <Price className='sfdhwo2'>
            <NewPrice className='sfdhwo2'>
              <New className='sfdhwo2'>
                { price }
              </New>
            </NewPrice>
            <OldPrice className='sfdhwo2'>
              <Old className='sfdhwo2'>
                { oldPrice }
              </Old>
            </OldPrice>
          </Price>
          <AddCart
            className='sfdhwo2'
            onClick={() => console.log(1)}
          >
            <Add className='sfdhwo2'>В корзину</Add>
          </AddCart>
        </PriceAndAddCart>
        <NameContainer className='sfdhwo2'>
          <Name className='sfdhwo2'>{title}</Name>
        </NameContainer>
      </MainContainer>
    </FrontContainer>
  )
}

export default Front