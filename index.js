// consulto producto
let producto = parseInt(
    prompt(
      'Ingrese el producto que quiere comprar: 1.Celular - 2.TV - 3.Computadora - 4.Bicicleta'
    )
  )
  let totalCompra = 0
  let seguirCompra = true
  let decision
  
  class Producto {
    constructor(id, nombre, precio) {
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
  const cel = new Producto(1, 'Celular', 500)
  const tv = new Producto(2, 'TV', 1000)
  const computadora = new Producto(3, 'Computadora', 800)
  const bici = new Producto(4, 'Bicicleta', 1500)
  
  while (seguirCompra === true) {
    if (producto === 1) {
      totalCompra = totalCompra + cel.precio
    } else if (producto === 2) {
      totalCompra = totalCompra + tv.precio
    } else if (producto === 3) {
      totalCompra = totalCompra + computadora.precio
    } else if (producto === 4) {
      totalCompra = totalCompra + bici.precio
    } else {
      producto = parseInt(
        prompt(
          'Ingrese un número válido: 1.Celular - 2.TV - 3.Computadora - 4.Bicicleta'
        )
      )
      continue
    }
  
    decision = parseInt(
        prompt('Quieres seguir comprando? 1.Si - 2.No')
        )

    if (decision === 1) {
      producto = parseInt(
        prompt(
          'Ingrese el producto que quiere comprar: 1.Celular - 2.TV - 3.Computadora - 4.Bicicleta')
      )
    } else {
      seguirCompra = false
    }
  }
  alert(`El total de su compra es ${totalCompra}`)