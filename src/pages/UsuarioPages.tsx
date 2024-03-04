import { BotonVolver } from "../components/BotonVolver"
import { useState } from "react"
import { Usuario } from "../interfaces/Usuario"

const listaUsuarios: Usuario[] =[
  {id: 1, nombre: 'Junior', apellido: ' Cabral', edad: 20},
  {id: 2, nombre: 'Julio', apellido: ' Tercero', edad: 21},
]

export const UsuarioPage = () => {
  const [usuario, setUsuario] = useState <Usuario[]>(listaUsuarios)
  const [nombre, setNombre] = useState ("")
  const [apellido, setApellido] = useState ("")
    const [edad, setEdad] = useState (0)

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
    setNombre("")
    setApellido("")
      setEdad(0)
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
              setNombre(event.target.value)
          }}/>
            <div>Apellido</div>
          <input type="text" name="apellido" placeholder="Apellido de usuario"
                 value={apellido} onChange={(event) => {
              setApellido(event.target.value)
          }}/>
            <div>Edad</div>
          <input type="number" name="edad" placeholder="Edad de usuario"
                 value={edad} onChange={(event) => {
              setEdad(parseInt(event.target.value))
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
