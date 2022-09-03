import theme from '@/theme'
import styled from 'styled-components'

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  font-size: ${theme.fontSizes[8]}px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 32px;
  background-color: ${theme.colors.whiteDark};
`
