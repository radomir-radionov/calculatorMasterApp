import styled from 'styled-components'

export const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 60px 84px;
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
  width: 250px;
  height: 50px;
  margin-top: 32px;
  padding: 12px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`
