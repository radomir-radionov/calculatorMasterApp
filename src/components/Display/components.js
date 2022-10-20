import styled from 'styled-components'

export const DisplayStyled = styled.section`
  display: flex;
  justify-content: end;
  padding: 2rem 10rem 2rem 0;
  border-bottom: 2px solid
    ${({ theme }) => theme.displayBorder};
`

export const Text = styled.p`
  min-height: 10rem;
  font-size: ${({ theme }) => theme.fontSizes[8]};
`
