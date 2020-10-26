// Void

// Explícito
function showInfo (user: any): void {
  console.log('User info', user.id, user.userName, user.firstName)
}

showInfo({ id: 1, username: 'Alex', firstName: 'Alejandra' })

// Never
function handleError (code: number, message: string): never {
// Process your code here
// Generate a message
  throw new Error(`${message}. Code: ${code}`)
}

handleError(213214, 'Important error')
