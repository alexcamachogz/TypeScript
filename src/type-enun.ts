// Orientación para fotografías

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape

console.log('landscape', landscape)
console.log('Landscape', PhotoOrientation[landscape])

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama
}

console.log('portrait', PictureOrientation.Portrait)

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex'
}
