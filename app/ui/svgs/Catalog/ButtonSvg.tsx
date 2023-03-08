import { FC } from 'react';

type ButtonSvgProps = {
  close: boolean
}

const ButtonSvg:FC<ButtonSvgProps> = ({close}) => {
  return (
    <svg
      style={{ width: '17px', height: '100%' }}
      viewBox='0 0 17 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        style={{ fill: close ? 'var(--text-c)' : 'var(--btn-add-c-pu)' }}
        d='M0 0H2.125V2.7H0V0ZM4.25 0H17V2.7H4.25V0ZM0
                  7.65H2.125V10.35H0V7.65ZM4.25 7.65H17V10.35H4.25V7.65ZM0
                  15.3H2.125V18H0V15.3ZM4.25 15.3H17V18H4.25V15.3Z'
      />
    </svg>
  )
}

export default ButtonSvg