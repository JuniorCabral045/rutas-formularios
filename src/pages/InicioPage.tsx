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
    <div className="container">
        <h1>Inicio</h1>
        <hr/>
        <BotonProductos/>
        <button className={"btn btn-primary m-2"} onClick={navegarAusuarios}>Usuarios</button>
        <button className={"btn btn-primary"} onClick={navegarAcategorias}>Categorías</button>


    </div>
  )
}
