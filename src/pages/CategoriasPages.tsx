import { useState } from "react"
import { BotonVolver } from "../components/BotonVolver"
import { Categoria } from "../interfaces/Categoria"
import {useForm} from "../hooks/useForm.ts";
import {BotonNavegador} from "../components/BotonNavegador.tsx";

const estadoInicialCategoria = {
    descripcion: "",
    codigo: ""
}

export const CategoriasPage = () => {
  const [categoria, setCategoria] = useState<Categoria[]>([])
    const {descripcion, codigo, onChange, reset} = useForm(estadoInicialCategoria)

  const agregarCategoria = (descripcion: string, codigo: string) => {
    const nuevaCategoria : Categoria =
    {
      id: categoria.length + 1,
      descripcion: descripcion,
      codigo: codigo
    }  
    setCategoria(categoria.concat(nuevaCategoria))
  }

  const onAgregarClicked = () => {
    agregarCategoria (descripcion, codigo)
    reset()
  }
  return (
      <div className="container mt-4">
          <h1>Categorías</h1>
          <hr/>

          <form onSubmit={(e) => {
              e.preventDefault();
              onAgregarClicked();
          }}>
              <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <input type="text" className="form-control" id="descripcion" required={true}
                         value={descripcion} onChange={(event) => {
                      onChange("descripcion", event.target.value)
                  }}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Código</label>
                  <input type="text" className="form-control" id="codigo" required={true}
                         value={codigo} onChange={(event) => {
                      onChange("codigo", event.target.value)
                  }}/>
              </div>
              <button className="btn btn-success" type="submit" disabled={!descripcion || !codigo}>Agregar</button>
              <BotonVolver/>
              <BotonNavegador ruta={"/productos"} name={"Productos"}/>
          </form>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Código</th>
              </tr>
              </thead>
              <tbody>
              {categoria.map((item) => (
                  <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.descripcion}</td>
                      <td>{item.codigo}</td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div>
  )
}
