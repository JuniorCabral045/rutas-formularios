import { useState } from "react"
import { BotonVolver } from "../components/BotonVolver"
import { Producto } from "../interfaces/Producto"
import {useForm} from "../hooks/useForm.ts";

const estadoInicialFormulario = {
    descripcion: "",
    precio: ""
}

export const ProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const {descripcion, precio, onChange, reset} = useForm(estadoInicialFormulario)

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
    reset()
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
                onChange("descripcion", event.target.value)
            }}
         />
         <input type="text" name="precio" placeholder="Precio" 
            value={precio} onChange={(event) => {
              onChange("precio", event.target.value)
            }}
         />

         <button onClick={() => onAgregarClicked()}>
            Agregar Producto
         </button>

         <BotonVolver/>
    </>

  )
}
