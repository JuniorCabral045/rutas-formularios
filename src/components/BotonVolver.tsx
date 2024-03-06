import { useNavigate } from "react-router-dom"

useNavigate
export const BotonVolver = () => {
    const navigate = useNavigate()

  return (
         <button className={"btn btn-danger m-2"} onClick={ ()=> navigate('/inicio') } >Volver a Inicio</button>
    )
}
