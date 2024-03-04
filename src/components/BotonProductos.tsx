import { useNavigate } from "react-router-dom"

useNavigate
export const BotonProductos = () => {
    const navigate = useNavigate()

  return (
         <button className={"btn btn-primary "} onClick={ ()=> navigate ('/productos')} >Productos</button>
    )
}
