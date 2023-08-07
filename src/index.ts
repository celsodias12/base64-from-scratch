const base64Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

function textToBinary(text: string) {
  let binaries = ''

  for (let i = 0; i < text.length; i++) {
    const letterBinary = text.charCodeAt(i).toString(2)

    const letterBinary8Bits = letterBinary.padStart(8, '0')

    binaries += letterBinary8Bits
  }

  return binaries
}

function groupBinariesByNumberOfBits(binary: string, quantityOfBits: number) {
  const regex = new RegExp(`.{1,${quantityOfBits}}`, 'g')

  const groupedBinaries = binary.match(regex)

  const binariesWithQuantityOfBits = groupedBinaries?.map(binary => binary.padEnd(quantityOfBits, '0'))

  return binariesWithQuantityOfBits
}

function binaryToDecimal(binary: string) {
  const decimal = parseInt(binary, 2)

  return decimal
}

function binaryToBase64(binary: string) {
  const groupedBinaries = groupBinariesByNumberOfBits(binary, 6)

  const base64 = groupedBinaries!.map(binary => {
    const decimal = binaryToDecimal(binary)

    return base64Characters[decimal]
  })

  const base64ArrayAsString = base64.join('')

  return base64ArrayAsString
}

function addEndChar(text: string, base64: string) {
  const remainderMultipleOf3 = {
    0: '',
    1: '==',
    2: '=',
  }

  const remainder = text.length % 3

  const base64WithEndChar = base64?.concat(remainderMultipleOf3[remainder as keyof typeof remainderMultipleOf3])

  return base64WithEndChar
}

function removeEndChar(base64: string) {
  const base64WithoutEndChar = base64.replace(/=+$/, '')

  return base64WithoutEndChar
}

function decimalToBinary(decimal: number) {
  const binary6Bits = decimal.toString(2).padStart(6, '0')

  return binary6Bits
}

function base64ToBinary(base64: string) {
  const base64CharactersValueAsKey = Object.entries(base64Characters).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
  }, {} as Record<string | number, string>)

  let binaries = ''

  for (const char of base64) {
    const decimal = base64CharactersValueAsKey[char]

    const decimalInt = parseInt(decimal)

    const binary = decimalToBinary(decimalInt)

    binaries += binary
  }

  return binaries
}

function binaryToText(binary: string, isFile = false) {
  const groupedBinaries = groupBinariesByNumberOfBits(binary, 8)

  let text = ''

  for (const binary of groupedBinaries!) {
    const decimal = parseInt(binary, 2)

    if (!isFile && decimal <= 31) continue

    const char = String.fromCharCode(decimal)

    text += char
  }

  return text
}

export const base64 = {
  encode: (text: string | Buffer) => {
    if (!text) return text

    let data = ''

    if (text instanceof Buffer) {
      data = text.toString('binary')
    } else {
      data = text
    }

    const binary = textToBinary(data)

    const base64 = binaryToBase64(binary)

    const base64WithEndChar = addEndChar(data, base64)

    return base64WithEndChar
  },
  decode: (base64: string, isFile = false) => {
    if (!base64) return base64

    const base64WithoutEndChar = removeEndChar(base64)

    const binary = base64ToBinary(base64WithoutEndChar)

    const text = binaryToText(binary, isFile)

    return text
  },
}
