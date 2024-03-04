import {useState} from "react";

export const useForm = <T extends object>(estadoInicial: T) => {
    const [formulario, setFormulario] = useState (estadoInicial)

    const onChange = <K extends Object>(campo: keyof T, valor: K) => {
        setFormulario({...formulario, [campo]: valor})
    }
    const reset = () => {
        setFormulario(estadoInicial)
    }

    return{...formulario, onChange, reset}
}