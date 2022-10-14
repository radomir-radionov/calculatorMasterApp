import styled from 'styled-components'

export const List = styled.ul``

export const Title = styled.h2`
  margin-bottom: 5rem;
  text-align: center;
  font-weight: 300;
`

export const Item = styled.li`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes[5]};
`
