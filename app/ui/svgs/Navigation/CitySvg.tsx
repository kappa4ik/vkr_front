import { FC } from 'react'

const CitySvg: FC = () => {
	return (
		<svg
			style={{ flexShrink: 0, margin: '0 6 0 0' }}
			width='16'
			height='16'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path fill='currentColor' d='M8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
			<path
				fill='currentColor'
				d='M8 0a7 7 0 0 0-7 7c0 2.91 1.713
                      5.148 3.285 6.596a15.845 15.845 0
                      0 0 2.945 2.13c.155.085.32.172.406.205a1
                      1 0 0 0 .728 0c.086-.033.25-.12.406-.206a15.846
                      15.846 0 0 0 2.945-2.13C13.287 12.149 15 9.91
                      15 7a7 7 0 0 0-7-7ZM3 7a5 5 0 0 1 10 0c0
                      2.09-1.237 3.833-2.64 5.125A13.846 13.846
                      0 0 1 8 13.863a13.847 13.847 0 0
                      1-2.36-1.738C4.237 10.833 3 9.09 3 7Z'
			/>
		</svg>
	)
}

export default CitySvg
