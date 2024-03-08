import { useState } from "react"
import { BotonVolver } from "../components/BotonVolver"
import { Producto } from "../interfaces/Producto"
import {useForm} from "../hooks/useForm.ts";

const estadoInicialFormulario = {
    descripcion: "",
    precio: "",
    fecha_de_ingreso: ""
}

export const ProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const {descripcion, precio, fecha_de_ingreso, onChange, reset} = useForm(estadoInicialFormulario)

  const agregarProducto = (descripcion: string, precio: number, fecha_de_ingreso: string) => {
    const nuevoProducto : Producto =
    {
      id: productos.length + 1,
      descripcion: descripcion,
      precio: precio,
      fecha_de_ingreso: fecha_de_ingreso
    }  
    setProductos(productos.concat(nuevoProducto))
  }

  const onAgregarClicked = () => {
    if (descripcion.length === 0 || precio.length === 0) {
      alert ("Ingrese todos los campos")
      return
    }
    agregarProducto (descripcion, +precio, fecha_de_ingreso)
    reset()
  }

  return (

      <div className="container">
          <h1>Productos</h1>
          <hr/>

          <form onSubmit={(e) => {
              e.preventDefault();
              onAgregarClicked();
          }}>
              <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <input type="text" className="form-control" id="descripcion" required={true}
                         value={descripcion} onChange={(event) => (
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
              <div className="mb-3">
                  <label className="form-label">Fecha de Ingreso</label>
                  <input type="date" className="form-control" id="fecha_de_ingreso" required={true}
                         value={fecha_de_ingreso.split('/').reverse().join('-')} onChange={event => {
                         const date = new Date(event.target.value)
                      onChange("fecha_de_ingreso", `${date.getUTCDate().toString().padStart(2, '0')}/${(date.getUTCMonth() + 1).toString().padStart(2, '0')}/${date.getUTCFullYear()}`)
                  }}/>
              </div>
              <button type="submit" className="btn btn-success" disabled={!descripcion || !precio || !fecha_de_ingreso}>Agregar</button>
              <BotonVolver/>
          </form>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Fecha de Ingreso</th>
              </tr>
              </thead>
              <tbody>
              {productos.map(({id, descripcion, precio, fecha_de_ingreso}) => (
                  <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{descripcion}</td>
                      <td>{precio.toFixed(2).replace('.', ',') + ' Gs.'}</td>
                      <td>{fecha_de_ingreso}</td>
                  </tr>
              ))}
              </tbody>
          </table>
          <table className={"table"}>
              <tbody>
                  <tr>
                      <td>Total de registros: {productos.length}</td>
                  </tr>
                  <tr>
                      <td>Precio total: {productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2).replace('.', ',') + ' Gs.'}</td>
                  </tr>
              </tbody>
          </table>
      </div>

  )
}

//const formatearFecha = (fecha: string): string => {
//    const fechaFormateada = new Date(fecha)
//    return fechaFormateada.toLocaleDateString('es-PY')
//}