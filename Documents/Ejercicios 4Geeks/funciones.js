function saludar(nombre, genero, curso) {
    let frase = `Hola ${nombre} ${genero == "f" ? "bienvenida" : "bienvenido"} al curso ${curso}` ;
    return frase
}

console.log(saludar("Antonio", "m", "pt-35"));