import { BotonVolver } from "../components/BotonVolver"
import { useState } from "react"
import { Usuario } from "../interfaces/Usuario"

const listaUsuarios: Usuario[] =[
  {id: 1, nombre: 'Junior', apellido: ' Cabral'},
  {id: 2, nombre: 'Julio', apellido: ' Tercero'},
]

export const UsuarioPage = () => {
  const [usuario, setUsuario] = useState <Usuario[]>(listaUsuarios)
  const [nombre, setNombre] = useState ("")
  const [apellido, setApellido] = useState ("")

  const agregarUsuario = (nombre: string, apellido: string) => {
    const nuevoUsuario: Usuario = 
    {
      id: usuario.length +1,
      nombre: nombre,
      apellido: ' ' + apellido
    }

    setUsuario(usuario.concat(nuevoUsuario))
  }

  const onAgregarClicked = () => {
    if(nombre.length === 0 || apellido.length === 0){
      alert("Ingrese todos los campos")
      return
    }

    agregarUsuario(nombre, apellido)
    setNombre("")
    setApellido("")
  }
  return (
        <>
            <h1>Usuarios</h1>
            <hr />
            <ul>
              {
                usuario.map(usuario => <li key={usuario.id}> {usuario.nombre}{usuario.apellido}</li>)
              }
            </ul>

            <input type="text" name="nombre" placeholder="Nombre de usuario"
              value={nombre} onChange={(event) =>{
                setNombre(event.target.value)
              }}/>

            <input type="text" name="apellido" placeholder="Apellido de usuario"
              value={apellido} onChange={(event)=> {
                setApellido(event.target.value)
              }}/>

              <button onClick={() => onAgregarClicked()}>
                Agregar Usuario
              </button>
            <BotonVolver/>
        </>
  )
}
