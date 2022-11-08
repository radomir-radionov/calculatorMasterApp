import styled from 'styled-components'

export const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 6rem 8rem;
`
export const SettingsWrapper = styled.div`
  width: 200px;
  height: 100%;
  margin: ${({ theme }) => theme.spaces[4]};
  & > * {
    margin-top: ${({ theme }) => theme.spaces[3]};
    height: 40px;
  }
`

export const Title = styled.h2`
  margin-bottom: 26px;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: 100;
`

export const Button = styled.button`
  width: 30rem;
  height: 5rem;
  margin-top: 32px;
  padding: 1.2rem;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`
