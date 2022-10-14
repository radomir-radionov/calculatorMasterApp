import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeActions } from '@/reducers/themeSlice'
import { themes } from '@/constants'
import {
  LabelStyled,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  BsArrowDownCircleStyled,
} from './components'

const DropDown = () => {
  const dispatch = useDispatch()
  const { theme: currentTheme } = useSelector(
    state => state.theme,
  )

  const [isOpen, setIsOpen] = useState(false)

  const filteredThemes = Object.entries(themes).filter(
    theme => theme[1] !== currentTheme,
  )

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = theme => () => {
    dispatch(themeActions.setTheme(theme[1]))
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <LabelStyled>Switch Theme</LabelStyled>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} isOpen={isOpen}>
          {currentTheme} <BsArrowDownCircleStyled />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {filteredThemes.map(theme => (
                <ListItem
                  key={theme[0]}
                  onClick={onOptionClicked(theme)}>
                  {theme[1]}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </React.Fragment>
  )
}

export default DropDown
