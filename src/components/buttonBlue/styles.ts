import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.blue_70};
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.blue_70};
  color: ${(props) => props.theme.neutral_00};
  font-size: 14px;
  font-weight: bold;

  text-wrap: nowrap;

  cursor: pointer;
  text-decoration: none;

  padding: 12px 24px;

  div {
    display: flex;
    gap: 8px;
    margin: 0px 22px;
  }
`
