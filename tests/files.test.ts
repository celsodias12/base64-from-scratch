import fs from 'node:fs'

import { describe, expect, it } from 'vitest'

import { base64 } from '../src'

describe('Files', () => {
  function encode(file: Buffer) {
    const encodedFile = base64.encode(file)

    const expectedEncoding = file.toString('base64')

    expect(encodedFile).eq(expectedEncoding)
  }

  function decode(file: Buffer, isFile: boolean) {
    const encodedFile = base64.encode(file)
    const decodedFile = base64.decode(encodedFile, isFile)

    const decodedFileInHex = Buffer.from(decodedFile, 'binary').toString('hex')

    const expectedEncodingInHex = file.toString('hex')

    expect(decodedFileInHex).contain(expectedEncodingInHex)
  }

  describe('PNG', () => {
    const file = fs.readFileSync('./example-files/test.png')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })

  describe('TXT', () => {
    const file = fs.readFileSync('./example-files/test.txt')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })

  describe('PPTX', () => {
    const file = fs.readFileSync('./example-files/test.pptx')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })

  describe('DOCX', () => {
    const file = fs.readFileSync('./example-files/test.docx')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })

  describe('PDF', () => {
    const file = fs.readFileSync('./example-files/test.pdf')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })

  describe('JPEG', () => {
    const file = fs.readFileSync('./example-files/test.jpeg')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })

  describe('ZIP', () => {
    const file = fs.readFileSync('./example-files/test.zip')

    it('Encode', () => {
      encode(file)
    })

    it('Decode', () => {
      decode(file, true)
    })
  })
})
