import { useNavigate } from "react-router-dom"

useNavigate
export const BotonVolver = () => {
    const navigate = useNavigate()

  return (
         <button className={"btn btn-primary m-2"} onClick={ ()=> navigate('/inicio') } >Volver a Inicio</button>
    )
}
