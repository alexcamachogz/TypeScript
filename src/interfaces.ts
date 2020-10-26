// Definir una interface
interface Picture {
  title: string,
  date: string,
  orientation: number
}

// Función para mostrar fotografía
function showPicture (picture: Picture) {
  console.log(`
    [title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}]
  `)
}

const myPic = {
  title: 'Test',
  date: '02-06-2020',
  orientation: 2
}

showPicture(myPic)

// Interfaz: Usuario
interface User {
  readonly id: number,
  userName: string,
  isPro: boolean
}

const user2: User = { id: 10, userName: 'Syaan', isPro: true }

console.log(user2)
