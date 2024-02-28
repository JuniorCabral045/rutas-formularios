import { useNavigate } from "react-router-dom"

useNavigate
export const BotonProductos = () => {
    const navigate = useNavigate()

  return (
         <button onClick={ ()=> navigate ('/productos')} style={{marginRight: 3}}>Productos</button>
    )
}
