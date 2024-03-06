import { useState } from "react"
import { BotonVolver } from "../components/BotonVolver"
import { Producto } from "../interfaces/Producto"
import {useForm} from "../hooks/useForm.ts";

const estadoInicialFormulario = {
    descripcion: "",
    precio: ""
}

export const ProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const {descripcion, precio, onChange, reset} = useForm(estadoInicialFormulario)

  const agregarProducto = (descripcion: string, precio: string) => {
    const nuevoProducto : Producto =
    {
      id: productos.length + 1,
      descripcion: descripcion,
      precio: precio
    }  
    setProductos(productos.concat(nuevoProducto))
  }

  const onAgregarClicked = () => {
    if (descripcion.length === 0 || precio.length === 0) {
      alert ("Ingrese todos los campos")
      return
    }
    agregarProducto (descripcion, precio)
    reset()
  }

  return (

    <div className="container">
        <h1>Productos</h1>
        <hr/>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <form onSubmit={(e) => {
            e.preventDefault();
            onAgregarClicked();
        }}>
            <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input type="text" className="form-control" id="descripcion" required={true}
                value={descripcion} onChange={(event) =>(
                    onChange("descripcion", event.target.value)
                )}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Precio</label>
                <input type="number" className="form-control" id="precio" required={true}
                value={precio} onChange={event => (
                    onChange("precio", event.target.value)
                )}/>
            </div>
            <button type="submit" className="btn btn-success" disabled={!descripcion || !precio}>Agregar</button>
            <BotonVolver/>
        </form>
    </div>

  )
}
