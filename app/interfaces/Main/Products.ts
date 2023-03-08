interface IDescription {
  quantity: number,
  manufacturer: string,
  weight: number
}

export interface IProducts {
  id: number,
  title: string,
  price: number,
  oldPrice: number,
  sale: number,
  description: IDescription
}

export const Products: IProducts[] = [
  {
    id: 1,
    title: 'asdasdas',
    price: 14999,
    oldPrice: 15999,
    sale: 9,
    description: {
      quantity: 3,
      manufacturer: 'ADIDAS',
      weight: 300
    }
  },
  {
    id: 2,
    title: '',
    price: 14999,
    oldPrice: 18999,
    sale: 9,
    description: {
      quantity: 3,
      manufacturer: 'ADIDAS',
      weight: 300
    }
  },
  {
    id: 3,
    title: '',
    price: 14999,
    oldPrice: 15999,
    sale: 9,
    description: {
      quantity: 3,
      manufacturer: 'ADIDAS',
      weight: 300
    }
  },
  {
    id: 4,
    title: '',
    price: 14999,
    oldPrice: 15999,
    sale: 9,
    description: {
      quantity: 3,
      manufacturer: 'ADIDAS',
      weight: 300
    }
  },
  {
    id: 5,
    title: '',
    price: 14999,
    oldPrice: 15999,
    sale: 9,
    description: {
      quantity: 3,
      manufacturer: 'ADIDAS',
      weight: 300
    }
  },
  {
    id: 6,
    title: '',
    price: 14999,
    oldPrice: 15999,
    sale: 9,
    description: {
      quantity: 3,
      manufacturer: 'ADIDAS',
      weight: 300
    }
  },
]