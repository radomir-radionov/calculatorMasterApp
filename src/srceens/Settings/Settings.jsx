import React from 'react'
import { useDispatch } from 'react-redux'
import { calculationActions } from '@/reducers/calculationSlice'
import DropDown from '@/containers/DropDown'
import { SettingsStyled, Title, Button } from './components'

const Settings = () => {
  const dispatch = useDispatch()

  const onClickClearHistory = () => {
    dispatch(calculationActions.clearAll())
  }

  return (
    <SettingsStyled>
      <Title>Settings</Title>
      <DropDown />
      <Button onClick={onClickClearHistory}>
        Clear All History
      </Button>
    </SettingsStyled>
  )
}

export default Settings
