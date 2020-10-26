export {}

class Picture {
  // Propiedades
  public id: number
  private title: string
  orientation: number

  constructor (id: number, title: string, orientation: number) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  // Comportamiento
  toString () {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
  }
}

console.log(Picture)
