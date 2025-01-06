import { Hero } from "../components/Hero/Hero";
import { ProductsProvider } from '../Context/ProductosContexto'; // Import ProductsProvider
import NuevosProductos from "../components/NuevosProductos/NuevosProductos";
import InicioProductos from "../components/InicioProductos/InicioProductos";
import Variants from "../components/ResaltarNegocio/ResaltarNegocio";





const Home = ()=> {
    return (
    <>
    
    
    <Hero/>
    <Variants/>
    <ProductsProvider>  {/* Wrap your components with the provider */}
      <InicioProductos />
    </ProductsProvider>
   

    
    
    </>
    );
    }
    export default  Home