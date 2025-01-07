import { Hero } from "../components/Hero/Hero";
import { ProductsProvider } from '../Context/ProductosContexto'; // Import ProductsProvider
import CategoriaBebidas from "../components/CategoriaBebidas/CategoriaBebidas";
import Variants from "../components/ResaltarNegocio/ResaltarNegocio";





const   CategoriaBebidasPage = ()=> {
    return (
    <>
    
  
    <ProductsProvider>  {/* Wrap your components with the provider */}
      <CategoriaBebidas />
    </ProductsProvider>
   

    
    
    </>
    );
    }
    export default  CategoriaBebidasPage