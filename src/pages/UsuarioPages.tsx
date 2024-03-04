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
      <>
          <h1>Usuarios</h1>
          <hr/>
          <ul>
              {
                  usuario.map(usuario => <li key={usuario.id}> {usuario.nombre} {usuario.apellido} {usuario.edad}</li>)
              }
          </ul>
            <div>Nombre</div>
          <input type="text" name="nombre" placeholder="Nombre de usuario"
                 value={nombre} onChange={(event) => {
              onChange("nombre", event.target.value)
          }}/>
            <div>Apellido</div>
          <input type="text" name="apellido" placeholder="Apellido de usuario"
                 value={apellido} onChange={(event) => {
              onChange("apellido", event.target.value)
          }}/>
            <div>Edad</div>
          <input type="number" name="edad" placeholder="Edad de usuario"
                 value={edad} onChange={(event) => {
              onChange("edad", event.target.value)
          }}/>
            <br/>
            <br/>

          <button onClick={() => onAgregarClicked()}>
              Agregar Usuario
          </button>

          <BotonVolver/>
      </>
  )
}
