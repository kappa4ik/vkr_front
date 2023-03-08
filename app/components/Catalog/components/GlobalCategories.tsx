import { FC } from 'react'
import styled from 'styled-components'
import GlobalCategory from '@/ui/links/Catalog/GlobalCategory';

const Categories = styled.div`
	margin: 0 auto;
	width: 272px;
`

const GlobalCategories: FC = () => {
  const globalCategories = [
    { id: 1, title: 'Одежда', link: '/' },
    { id: 2, title: 'Одежда', link: '/' },
    { id: 3, title: 'Одежда', link: '/' },
    { id: 4, title: 'Одежда', link: '/' },
    { id: 5, title: 'Одежда', link: '/' },
    { id: 6, title: 'Одежда', link: '/' },
    { id: 7, title: 'Одежда', link: '/' },
    { id: 8, title: 'Одежда', link: '/' },
    { id: 9, title: 'Одежда', link: '/' },
    { id: 10, title: 'Одежда', link: '/' },
    { id: 11, title: 'Одежда', link: '/' }
  ]
  
  return (
		<Categories>
			{globalCategories.map(({ id, title, link }) => (
				<GlobalCategory key={id} title={title} link={link} />
			))}
		</Categories>
	)
}

export default GlobalCategories
