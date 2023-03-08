import { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { IProducts, Products } from '@/interface/Main/Products'
import Product from './components/Product'

const TwiceGroupContainer = styled.div`
	margin-bottom: 50px;
	margin-top: 21px;
	height: 655px;
`

interface IGroupContainer {
	products: IProducts[]
}

const GroupContainer = styled.div<IGroupContainer>`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 300px;
	margin-top: 5px;
`

const ProductContainer = styled.div`
  background: white;
  height: 298px;
  width: 229px;
  border: 1px solid var(--text-c);
  border-radius: var(--br-radius);
  transition: .4s;
  :hover{
    transform: scale(1.2);
    z-index: 100;
  }
`

interface ITwiceGroup {}

const TwiceGroup: FC<ITwiceGroup> = () => {

	return (
		<TwiceGroupContainer>
			<div>
				<p>Название группы</p>
			</div>
			<GroupContainer products={Products}>
				{Products.map(prod => (
					<ProductContainer
						key={prod.id}
					>
						<Product prod={prod} />
					</ProductContainer>
				))}
			</GroupContainer>
		</TwiceGroupContainer>
	)
}

export default TwiceGroup
