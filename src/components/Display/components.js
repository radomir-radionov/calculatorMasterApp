import theme from '@/theme'
import styled from 'styled-components'

export const DisplayStyled = styled.section`
  border-bottom: 2px solid ${theme.colors.gray};
`

export const Result = styled.p`
  font-size: ${theme.fontSizes[8]}px;
  text-align: right;
`
