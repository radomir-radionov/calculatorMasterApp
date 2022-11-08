import styled from 'styled-components'
import { BsArrowDownCircle } from 'react-icons/bs'

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const DropDownContainer = styled.div`
  width: 30rem;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  border-radius: 4px;

  &:hover {
    color: ${({ theme }) => theme.dropDownColor};
  }
`

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  border: 1px solid black;
  border-radius: 4px;
  border-bottom-left-radius: ${props =>
    props.isOpen ? 0 : '4px'};
  border-bottom-right-radius: ${props =>
    props.isOpen ? 0 : '4px'};
  cursor: pointer;
`

export const DropDownListContainer = styled.div`
  position: absolute;
`

export const DropDownList = styled.ul`
  width: 30rem;
  background-color: white;
`

export const ListItem = styled.li`
  padding: 7px 12px;
  border: 1px solid black;
  border-top: 0;
  background-color: ${({ theme }) => theme.optionBg};
  list-style: none;
  cursor: pointer;
`

export const BsArrowDownCircleStyled = styled(
  BsArrowDownCircle,
)`
  &:hover {
    color: green;
  }
`

export const Syledtest = styled.svg`
  outline: 1px solid red;
  .triangle {
    border: 1px solid black;
    fill: #0f0;
    stroke: red;
    stroke-width: 50;
  }
`

export const TriangleWrapper = styled.div`
  transform: rotate(180deg);
`

export const Triangle = styled.div`
  position: relative;
  background-color: #f2f2f2;
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }

  &,
  &:before,
  &:after {
    width: 100px;
    height: 100px;
    border-top-right-radius: 30%;
    outline: 1px solid black;
  }

  &:before {
    transform: rotate(-135deg) skewX(-45deg)
      scale(1.414, 0.707) translate(0, -50%);
  }

  &:after {
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
    transform: rotate(135deg) skewY(-45deg)
      scale(0.707, 1.414) translate(50%);
  }
`
