import { Calculator, getCommand } from '.'

const findOperandIndex = signs => {
  const idx = signs.findIndex(sign => /[/*%]/.test(sign))
  return idx === -1
    ? signs.findIndex(
        (sign, i) => i !== 0 && /[+-]/.test(sign),
      )
    : idx
}

const calculateSimpleExpression = expression => {
  const signs = expression.split(' ')
  const calculator = new Calculator()
  while (signs.length !== 1) {
    const idx = findOperandIndex(signs)
    const command = getCommand(signs[idx], [
      signs[idx - 1],
      signs[idx + 1],
    ])
    if (command) calculator.execute(command)
    signs.splice(idx - 1, 3, calculator.getCurrent())
  }
  return signs[0]
}

const countBrackets = expression => {
  const { length: left } = expression.match(/[(]/g) ?? []
  const { length: right } = expression.match(/[)]/g) ?? []
  return [left, right]
}

const removeExcess = expression =>
  expression.replace(/(\)\d)$/, ')')

export const resolveBrackets = expression => {
  const [left, right] = countBrackets(expression)
  return `${removeExcess(expression)}${')'.repeat(
    left - right,
  )}`
}

export const negateValue = value =>
  Number(value) > 0
    ? `-${value}`
    : Number(value) === 0
    ? value
    : value.slice(1)

export const addValueToExpression = (value, expression) => {
  const piece = Number(value) < 0 ? `(${value})` : value
  return /\)$/.test(expression) ? '' : piece
}

export const addDotToValue = value =>
  /\./.test(value) ? value : `${value}.`

export const openBracket = expression => {
  if (/\)$/.test(expression))
    return expression.replace(/\(([^(]+)$/g, '(')
  return `${expression}(`
}

export const closeBracket = (expression, value) => {
  const [left, right] = countBrackets(expression)
  if (left <= right) return expression
  if (/[( ]/.test(expression.slice(-1)))
    return `${expression}${addValueToExpression(
      value,
      expression,
    )})`
  return `${expression})`
}

export const calculateExpression = function calculate(
  expression,
) {
  if (!/[()]/.test(expression)) {
    return calculateSimpleExpression(expression)
  }
  const signs = expression.split('')
  let start = null
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '(') {
      start = i
    }
    if (signs[i] === ')' && start !== null) {
      const piece = calculate(
        signs.slice(start + 1, i).join(''),
      )
      signs.splice(start, i - start + 1, piece)
      i = -1
    }
  }
  return calculate(signs.join(''))
}

export const validateValue = value =>
  value.replace(/^0+/, '0')
