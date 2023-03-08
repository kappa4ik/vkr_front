import { FC } from 'react';
import styled from 'styled-components';

const ContainerInput = styled.div`
  justify-content: center;
`;

const Input = styled.input`
  background-color: var(--theme-bgc);
  border: 1px solid var(--btn-add-c-pu);
  border-radius: var(--br-radius);
  color: var(--link-c);
  font-size: var(--catalog-font-size);
  height: calc(var(--full-height) - 20px);
  padding: 5px 0 5px 18px;
  width: calc(var(--form-width) - 110px);
  :active, :hover, :focus {
    outline: none;
  }
`;

const SearchInput:FC = () => {
  return (
    <ContainerInput>
      <Input />
    </ContainerInput>
  )
}

export default SearchInput;