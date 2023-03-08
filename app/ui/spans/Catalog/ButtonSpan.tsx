import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Span = styled.span`
	width: 113px;
	display: flex;
	align-items: center;
	justify-content: center;
`

type ButtonSpanProps = {
  children: ReactNode
}

const ButtonSpan:FC<ButtonSpanProps> = ({children}) => {
  return (
    <Span>
      {children}
    </Span>
  )
}

export default ButtonSpan