import { describe, expect, it } from 'vitest'

import { base64 } from '../src'

describe('Text', () => {
  function encode(text: string) {
    const encodedText = base64.encode(text)

    const buffer = Buffer.from(text)
    const expectedEncoding = buffer.toString('base64')

    expect(encodedText).eq(expectedEncoding)
  }

  function decode(text: string) {
    const encodedText = base64.encode(text)
    const decodedText = base64.decode(encodedText)

    const buffer = Buffer.from(encodedText, 'base64')
    const expectedEncoding = buffer.toString('utf8')

    expect(decodedText).eq(expectedEncoding)
  }

  const text1 = 'Hello'

  describe(text1, () => {
    const text = text1

    it('Encode', () => {
      encode(text)
    })

    it('Decode', () => {
      decode(text)
    })
  })

  const text2 = 'a'

  describe(text2, () => {
    const text = text1

    it('Encode', () => {
      encode(text)
    })

    it('Decode', () => {
      decode(text)
    })
  })
})
