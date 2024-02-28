import { useState } from "react"
import { BotonVolver } from "../components/BotonVolver"
import { Producto } from "../interfaces/Producto"

const listaProductos: Producto[] = [
  {id: 1, descripcion: 'Tomate', precio: '2000.00'},
  {id: 2, descripcion: 'Lechuga', precio: '3000.00'},
  {id: 3, descripcion: 'Locote', precio: '5000.00'},
]

export const ProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>(listaProductos)
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")

  const agregarProducto = (descripcion: string, precio: string) => {
    const nuevoProducto : Producto =
    {
      id: productos.length + 1,
      descripcion: descripcion,
      precio: precio
    }  
    setProductos(productos.concat(nuevoProducto))
  }

  const onAgregarClicked = () => {
    if (descripcion.length === 0 || precio.length === 0) {
      alert ("Ingrese todos los campos")
      return
    }
    agregarProducto (descripcion, precio)
    setDescripcion("")
    setPrecio("")
  }

  return (

    <>
         <h1>Productos</h1>
         <hr />
         <ul>
            {
              productos.map(producto => <li key={producto.id}> {producto.descripcion} {producto.precio}</li>)
            } 
         </ul>

         <input type="text" name="descripcion" placeholder="Descripcion" 
            value={descripcion} onChange={(event) =>{
              setDescripcion(event.target.value)

            }}
         />
         <input type="text" name="precio" placeholder="Precio" 
            value={precio} onChange={(event) => {
              setPrecio(event.target.value)
            }}
         />

         <button onClick={() => onAgregarClicked()}>
            Agregar Producto
         </button>

         <BotonVolver/>
    </>

  )
}
