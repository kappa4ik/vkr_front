import { FC } from 'react'
import kitty from '@/images/kitty.jpg'
import Image from 'next/image'

const MainLogo: FC = () => {
	return (
		<Image
			width='149'
			height='58'
			src={kitty}
			alt='kitty'
			style={{
				borderRadius: 'calc(var(--br-radius) - 2px)'
			}}
			priority={true}
		/>
	)
}

export default MainLogo
