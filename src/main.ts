console.log('Primeros pasos con TypeScript')

// Number
// Explícito
const phone: number = 3315015804

const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744
// Implícito
const phoneNumber = 3315015804

console.log(hex, binary, octal, phoneNumber)

// Boolean
const isTrue: boolean = true

// String
// Explícito
const firstName: string = 'Alejandra'
// Implícito
const lastName = 'Camacho'

// Template string
// Uso de back-tick ``
const userInfo: string = `
  User info:
  firstName: ${firstName}
  lastName: ${lastName}
  phone: ${phone}
  isValid: ${isTrue}
`
console.log('userInfo', userInfo)
