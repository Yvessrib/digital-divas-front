import { styled } from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;

  button {
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 12px;

    div {
      display: flex;
      gap: 2px;
      align-items: center;
    }
  }
`

export const SearchBar = styled.div`
  flex: 1;
  input {
    width: 100%;
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
  }
`
