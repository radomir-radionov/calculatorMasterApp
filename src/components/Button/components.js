import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  border: 1px solid ${({ theme }) => theme.btnBorder};
  border-radius: 3.2rem;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.btnBg};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBg};
  }
`
