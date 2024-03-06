import { BotonVolver } from "../components/BotonVolver"
import { useState } from "react"
import { Usuario } from "../interfaces/Usuario"
import {useForm} from "../hooks/useForm.ts";

const estadoInicialUsuario = {
    nombre: "",
    apellido: "",
    edad: 0,
}

export const UsuarioPage = () => {
  const [usuario, setUsuario] = useState <Usuario[]>([])
  const {nombre, apellido, edad, onChange, reset} = useForm(estadoInicialUsuario)

  const agregarUsuario = (nombre: string, apellido: string, edad: number) => {
    const nuevoUsuario: Usuario = 
    {
      id: usuario.length +1,
      nombre: nombre,
      apellido: apellido,
        edad: edad
    }

    setUsuario(usuario.concat(nuevoUsuario))
  }

  const onAgregarClicked = () => {
    if(nombre.length === 0 || apellido.length === 0 || edad === 0){
      alert("Ingrese todos los campos")
      return
    }

    agregarUsuario(nombre, apellido, edad)
    reset()
  }
  return (
      <div className="container">
          <h1>Usuarios</h1>
          <hr/>

          <form onSubmit={(e) => {
              e.preventDefault();
              onAgregarClicked();
          }}>
              <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" required={true}
                         value={nombre} onChange={(event) => {
                      onChange("nombre", event.target.value)
                  }}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="apellido" required={true}
                         value={apellido} onChange={(event) => {
                      onChange("apellido", event.target.value)
                  }}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Edad</label>
                  <input type="number" className="form-control" id="edad" required={true}
                         value={edad} onChange={(event) => {
                      onChange("edad", event.target.value)
                  }}/>
              </div>
              <button type="submit" className="btn btn-success" disabled={!nombre || !apellido || !edad}>Agregar
              </button>
              <BotonVolver/>
          </form>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Edad</th>
              </tr>
              </thead>
              <tbody>
              {usuario.map((item) => (
                  <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.nombre}</td>
                      <td>{item.apellido}</td>
                      <td>{item.edad}</td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div>
  )
}
