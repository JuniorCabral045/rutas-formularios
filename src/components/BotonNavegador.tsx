import { useNavigate } from "react-router-dom";
import React from "react";

interface Props{
    name: string;
    ruta: string;
    margenDerecho?: boolean;
    estilos?: React.CSSProperties;
}

export const BotonNavegador = ({name, ruta, margenDerecho = false, estilos={}}: Props) => {
    const navigate = useNavigate();

    const navegarADestino = () => {
        navigate(ruta);
    }
    return (
        <button className="btn btn-primary" onClick={navegarADestino} style={{ ...estilos, marginRight: margenDerecho? 10 : undefined }}>{name}</button>
    )
}