'use strict'

class Polygon {
  constructor(width, height) {
    this.name = 'Polygon'
    this.width = width
    this.height = height
  }

  printName() {
    return 'I am a ' + this.name
  }
}

module.exports = Polygon
