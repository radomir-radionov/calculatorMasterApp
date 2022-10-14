import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.fontSizes[3]};
  background-color: ${({ theme }) => theme.colors.error};
`
