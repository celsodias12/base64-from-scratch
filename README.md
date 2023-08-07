# Text/File to Base64 Converter

This is a project that provides functions to encode and decode strings or files to base64.

## How to use

To use the converter, import the `base64` object and call the `encode()` and `decode()` functions as needed.

### Encoding a string to base64

To encode a string to base64, call the `encode()` function and pass the string as an argument. The function will return a base64-encoded string corresponding to the input.

```typescript
import { base64 } from './src'

const text = 'Hello, world!'
const encoded = base64.encode(text)

console.log(encoded) // SGVsbG8sIHdvcmxkIQ==
```

### Decoding a string from base64

To decode a base64-encoded string, call the `decode()` function and pass the string as an argument. The function will return a text string corresponding to the input.

```typescript
import { base64 } from './base64'

const encoded = 'SGVsbG8sIHdvcmxkIQ=='
const text = base64.decode(encoded)

console.log(text) // Hello, world!
```

### Encoding a file to base64

To encode a file to base64, call the `encode()` function and pass a buffer object containing the file as an argument. The function will return a base64-encoded string corresponding to the input.

```typescript
import { base64 } from './base64'
import { readFileSync } from 'fs'

const file = readFileSync('file.txt')
const encoded = base64.encode(file)

console.log(encoded) // SGVsbG8sIHdvcmxkIQ==
```

### Decoding a file from base64

To decode a base64-encoded file, call the `decode()` function and pass the base64-encoded string as an argument. The function will return a buffer object containing the file corresponding to the input.

```typescript
import { base64 } from './base64'
import { writeFileSync } from 'fs'

const encoded = 'SGVsbG8sIHdvcmxkIQ=='
const file = base64.decode(encoded, true)

writeFileSync('file.txt', file)
```

## API

### `base64.encode(text: string | Buffer): string`

Encodes a text string or buffer object to a base64-encoded string.

- `text`: The text string or buffer object to be encoded.
- `Buffer`: An optional buffer object of the file to be encoded.

Returns a base64-encoded string corresponding to the input.

### `base64.decode(base64: string, isFile = false): string | Buffer`

Decodes a base64-encoded string to a text string or buffer object.

- `base64`: The base64-encoded string to be decoded.
- `isFile`: An optional boolean value indicating whether the base64-encoded string represents a file.

Returns a text string or buffer object if it is a file corresponding to the input.

## Contributing

If you want to contribute to the project, feel free to open an issue or send a pull request. All types of contributions are welcome, from bug fixes to new features and performance improvements.
