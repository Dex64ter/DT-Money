import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButtton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
  font-weight: bold;

  border-radius: 6px;
  border: none;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
