import { useState } from "react"
import { BotonProductos } from "../components/BotonProductos"
import { BotonVolver } from "../components/BotonVolver"
import { Categoria } from "../interfaces/Categoria"
import {useForm} from "../hooks/useForm.ts";

const estadoInicialCategoria = {
    descripcion: ""
}

export const CategoriasPage = () => {
  const [categoria, setCategoria] = useState<Categoria[]>([])
    const {descripcion, onChange, reset} = useForm(estadoInicialCategoria)

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
    reset()
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
              onChange("descripcion",event.target.value)

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
