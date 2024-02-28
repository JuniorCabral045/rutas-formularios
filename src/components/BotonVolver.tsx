import { useNavigate } from "react-router-dom"

useNavigate
export const BotonVolver = () => {
    const navigate = useNavigate()

  return (
         <button onClick={ ()=> navigate(-1) } style={{marginRight: 3}}>Volver a Inicio</button>
    )
}
