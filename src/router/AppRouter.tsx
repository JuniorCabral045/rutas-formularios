import { Navigate, Route, Routes } from "react-router-dom"
import { InicioPage } from "../pages/InicioPage"
import { ProductosPage } from "../pages/ProductosPage"
import { UsuarioPage } from "../pages/UsuarioPages" 
import { CategoriasPage } from "../pages/CategoriasPages" 

export const AppRoutter = () => {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to ='/inicio'/>}/>
        <Route path="inicio" element={<InicioPage/>}/>        
        <Route path="productos" element={<ProductosPage/>}/>        
        <Route path="usuarios" element={<UsuarioPage/>}/> 
        <Route path="categorias" element={<CategoriasPage/>}/>            
    </Routes>
  )
}
