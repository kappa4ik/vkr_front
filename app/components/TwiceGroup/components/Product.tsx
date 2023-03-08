import { IProducts } from '@/interface/Main/Products'
import { FC, useState } from 'react'
import styled from 'styled-components'
import Back from './Back'
import Front from './Front'

const Flip = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transition: 1s;
`

interface ProductProps {
  prod: IProducts,
}

const Product: FC<ProductProps> = ({prod}) => {
	const [rotate, setRotate] = useState<boolean>(false);
	
	const changeRotate = (rotatingFlag : boolean) => {
      setRotate(!rotatingFlag);
  }

  const checkRotate = () => {
    if(rotate){
      setTimeout(() => {
        changeRotate(rotate);
      }, 700);
    }
  }

	return (
		<>
			<Flip
        style={{transform: rotate ? 'rotateY(180deg)' : '',}}
        onMouseLeave={() => checkRotate()}
      >
        <Back
          changeRotate={changeRotate}
          rotate={rotate}
          oldPrice={prod.oldPrice}
        ></Back>
				<Front
          changeRotate={changeRotate}
          rotate={rotate}
          title={prod.title}
          price={prod.price}
          oldPrice={prod.oldPrice}
          sale={prod.sale}
        ></Front>
			</Flip>
		</>
	)
}

export default Product