interface Entity {
  id: number
  title: string
}

interface Album extends Entity {
  description: string
}

interface Picture extends Entity {
  orientation: number
}

const album: Album = {
  id: 10,
  title: 'Meetups',
  description: 'Community events around the world'
}

const picture: Picture = {
  id: 1,
  title: 'Family',
  orientation: 2,
  date: '2020'
}

console.log(album, picture)
