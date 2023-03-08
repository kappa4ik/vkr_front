import { FC } from 'react';

const AddressBookBySvg:FC = () => {
  return (
		<svg
			style={{ margin: '0px 6px' }}
			width='5'
			height='8'
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				style={{ fill: 'var(--link-color)' }}
				d='M7 14C5.2 14 3.3 13.2 2 11.9C0.7
                       10.6 0 8.8 0 7C0 5.2 0.8 3.4 2 2C3.3
                       0.7 5.1 0 7 0C8.8 0 10.6 0.8 11.9
                       2C13.2 3.3 14 5.1 14 7C14 8.8 13.2
                       10.6 11.9 11.9C10.6 13.2 8.8 14 7 14Z'
			/>
		</svg>
	)
};

export default AddressBookBySvg;