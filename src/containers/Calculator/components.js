import styled from 'styled-components'

export const CalculatorStyled = styled.main`
  display: flex;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bodyBg};

  @media screen and (max-width: 550px) {
    padding: 1rem;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  margin-right: 2.3rem;
`

export const HistoryContainer = styled.div`
  width: 40rem;
  padding-right: 3rem;
  padding-left: 4rem;
  border-left: 2px solid
    ${({ theme }) => theme.displayBorder};
`

export const HistoryButton = styled.button``
