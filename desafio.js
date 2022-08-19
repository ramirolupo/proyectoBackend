class Usuario {

    constructor (nombre, apellido, mascotas, libros) {
    
    this.nombre = nombre
    this.apellido = apellido
    this.mascotas = []
    this.libros = []
    
    }
    
    getFullName() {
    
    return `${this.nombre} ${this.apellido}`
    
    }
    
    addMascotas(mascota) {
    
    this.mascotas.push(mascota)
    
    }
    
    countMascotas() {
    
    return this.mascotas.length
    
    }
    
    addBook(nombre, autor){
    
    this.libros.push({'nombre': nombre, 'autor': autor})
    
    }
    
    getBookNames() {
    
    return this.libros.map(e => e.nombre)
    
    }
    
}

const persona = new Usuario('Homero', 'Simpson')

persona.getFullName()
persona.addMascotas('Ayudante de santa')
persona.addMascotas('Bola de nieve')
persona.countMascotas()
persona.addBook('Tv Guía', 'Compumundo Hiper Mega Red')
persona.getBookNames()
console.log(persona)