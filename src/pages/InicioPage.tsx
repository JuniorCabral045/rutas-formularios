import { useNavigate } from "react-router-dom"
import { BotonProductos } from "../components/BotonProductos"

export const InicioPage = () => {

    const navigate = useNavigate()

    const navegarAusuarios = () => {
        navigate('/usuarios')
    } 
    const navegarAcategorias = () => {
      navigate('/categorias')
  } 


  return (
    <>
        <h1>Inicio</h1>
        <hr/>
        <BotonProductos/>
        <button onClick={navegarAusuarios} style={{marginRight: 3}}>Usuarios</button>
        <button onClick={navegarAcategorias} style={{marginRight: 3}}>Categorías</button>


    </>
  )
}
