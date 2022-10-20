import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { calculationActions } from '@/reducers/calculationSlice'
import { keypadOptions } from '@/constants'
import { Wrapper, KeypadStyled } from './components'
import Button from '@/components/Button'

const Keypad = () => {
  const dispatch = useDispatch()

  const onClickHandler = useCallback(
    action =>
      dispatch(calculationActions.setCalculator(action)),
    [dispatch],
  )

  return (
    <Wrapper>
      <KeypadStyled>
        {keypadOptions.map(({ type, value }) => (
          <Button
            key={uuidv4()}
            dataTestId={`button-${value}`}
            type={type}
            value={value}
            handler={onClickHandler}
          />
        ))}
      </KeypadStyled>
    </Wrapper>
  )
}

export default Keypad
