import { Hero } from "../components/Hero/Hero";
import { ProductsProvider } from '../Context/ProductosContexto'; // Import ProductsProvider
import CategoriaAlimentos from "../components/CategoriaAlimentos/CategoriaAlimentos";
import Variants from "../components/ResaltarNegocio/ResaltarNegocio";





const   CategoriaAlimentosPage = ()=> {
    return (
    <>
    
  
    <Variants/>
    <ProductsProvider>  {/* Wrap your components with the provider */}
      <CategoriaAlimentos />
    </ProductsProvider>
   

    
    
    </>
    );
    }
    export default  CategoriaAlimentosPage