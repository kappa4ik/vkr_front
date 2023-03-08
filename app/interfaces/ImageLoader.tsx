import { ImageLoader } from 'next/image'

export const Loader: ImageLoader = ({ src, width, quality }) => {
	return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
