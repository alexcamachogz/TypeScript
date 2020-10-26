
type SquareSize = '100x100' | '500x500' | '1000x1000'

// Crear una fotografía
function createPicture (title: string, date: string, size: SquareSize) {
  console.log('Create picture...')
}

createPicture('My Birthday', '02-06-2020', '500x500')

// Parámetros opcionales
function createPicture2 (title: string, date: string, size?: SquareSize) {
  console.log('Create picture...')
}

createPicture2('My Birthday', '02-06-2020')

// Flat Array Function
const createPic = (title: string, date: string, size: SquareSize): object => {
  return { title, date, size }
}

console.log(createPic)
