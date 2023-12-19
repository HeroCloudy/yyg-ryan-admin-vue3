export const hasClass = (el: Element, className: string): boolean => {
  if (el.classList) {
    return el.classList.contains(className)
  }
  return ` ${el.className} `.indexOf(` ${className} `) > -1
}

export const addClass = (el: Element, className: string): void => {
  let currentClassName = el.className
  const classes = className.split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (clsName) {
      if (el.classList) {
        el.classList.add(clsName)
      } else if (!hasClass(el, clsName)) {
        currentClassName += ` ${clsName}`
      }
    }
  }
  if (!el.classList) {
    el.className = currentClassName
  }
}

export const removeClass = (el: Element, className: string) => {
  const classes = className.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (clsName) {
      if (el.classList) {
        el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

const trim = (str: string) => {
  return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
