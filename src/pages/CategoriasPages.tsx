import { useState } from "react"
import { BotonProductos } from "../components/BotonProductos"
import { BotonVolver } from "../components/BotonVolver"
import { Categoria } from "../interfaces/Categoria"

const listaCategorias: Categoria[] = [
  {id: 1, descripcion: 'Frutas'},
  {id: 2, descripcion: 'Verduras'},
]

export const CategoriasPage = () => {
  const [categoria, setCategoria] = useState<Categoria[]>(listaCategorias)
  const [descripcion, setDescripcion] = useState("")

  const agregarCategoria = (descripcion: string) => {
    const nuevaCategoria : Categoria =
    {
      id: categoria.length + 1,
      descripcion: descripcion
    }  
    setCategoria(categoria.concat(nuevaCategoria))
  }

  const onAgregarClicked = () => {
    if (descripcion.length === 0) {
      alert ("Ingrese todos los campos")
      return
    }
    agregarCategoria (descripcion)
    setDescripcion("")
  }
  return (
    <>
    <h1>Categorías</h1>
    <hr />
         <ul>
            {
              categoria.map(categoria => <li key={categoria.id}> {categoria.descripcion} </li>)
            } 
         </ul>

         <input type="text" name="descripcion" placeholder="Descripcion" 
            value={descripcion} onChange={(event) =>{
              setDescripcion(event.target.value)

            }}
         />

         <button onClick={() => onAgregarClicked()}>
            Agregar Categoria
         </button>
    <BotonVolver/>
    <BotonProductos/>
</>
  )
}
