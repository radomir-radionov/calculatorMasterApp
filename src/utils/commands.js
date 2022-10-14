export class Command {
  constructor(execute = number => number) {
    this.execute = execute
  }
}
export class AddCommand {
  x
  y
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x + this.y
  }
}

export class SubCommand {
  x
  y
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x - this.y
  }
}

export class MulCommand {
  x
  y
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x * this.y
  }
}

export class DivCommand {
  x
  y
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x / this.y
  }
}

export class ResDivCommand {
  x
  y
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  execute() {
    return this.x % this.y
  }
}

export const getCommand = (sign, [x, y]) => {
  switch (sign) {
    case '+': {
      return new AddCommand(+x, +y)
    }
    case '-': {
      return new SubCommand(+x, +y)
    }
    case '*': {
      return new MulCommand(+x, +y)
    }
    case '/': {
      return new DivCommand(+x, +y)
    }
    case '%': {
      return new ResDivCommand(+x, +y)
    }
    default:
      return null
  }
}
