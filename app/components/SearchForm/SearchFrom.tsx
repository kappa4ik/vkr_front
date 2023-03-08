import { FC } from 'react'
import styled from 'styled-components'
import SearchInput from '@/ui/inputs/SearchForm/SearchInput'
import TextButton from '@/ui/buttons/SearchForm/TextButton'
import VoiceButton from '@/ui/buttons/SearchForm/VoiceButton'

const FormContainer = styled.div`
	border: 1px solid var(--btn-add-c-pu);
	border-radius: var(--br-radius);
	height: var(--el-height);
	width: var(--search-width);
`

interface ISearchForm {
  method: string
  onSubmit: () => void
}

const Form = styled.form<ISearchForm>`
	--form-width: 690px;
	display: flex;
	height: var(--el-height);
	align-items: center;
	justify-content: space-between;
	margin: 0px 18px 0 6px;
	width: var(--form-width);
`

const SearchForm: FC = () => {
  const handleFormSubmit = () => {
    window.location.assign('http://localhost:3000/search?')
  }
  
  return (
    <FormContainer>
      <Form method='get' onSubmit={handleFormSubmit}>
        <SearchInput />
        <TextButton />
        <VoiceButton />
      </Form>
    </FormContainer>
  )
}

export default SearchForm
