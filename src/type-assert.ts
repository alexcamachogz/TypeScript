export { }

const userName: any = 'Syaan'

// Angle bracket syntax
const message: string = (<string>userName).length > 5
  ? `Welcome ${userName}`
  : 'Username is too short'

console.log(message, userName)

// Sintaxis as
const message2: string = (userName as string).length > 5
  ? `Welcome ${userName}`
  : 'Username is too short'

console.log(message2)
