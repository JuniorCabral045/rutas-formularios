import {BotonNavegador} from "../components/BotonNavegador.tsx";

export const InicioPage = () => {

  return (
    <div className="container">
        <h1>Inicio</h1>
        <hr/>
        <BotonNavegador name={"Productos"} ruta={"/productos"} margenDerecho={true}/>
        <BotonNavegador name={"Usuarios"} ruta={"/usuarios"} margenDerecho={true}/>
        <BotonNavegador name={"Categorías"} ruta={"/categorias"}/>


    </div>
  )
}
