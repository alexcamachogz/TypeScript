export { }

type IDUser = number | string

let idUser: IDUser
idUser = 10
idUser = '10'

console.log(idUser)

// Buscar username dado un ID
function getUserNameById (id: IDUser) {
  // Lógica de negocio
  return 'syaan'
}

getUserNameById(10)

// Tipos literales
type SquareSize = '100x100' | '500x500' | '1000x1000'
const smallPicture: SquareSize = '100x100'

console.log(smallPicture)
