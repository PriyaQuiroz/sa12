import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/ProductoServices";
import CardProducto from "./CardProducto";

export default function CatalogoProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function listar() {
      const resultado = await obtenerProductos();
      setProductos(resultado.products || []);
    }
    listar();
  }, []);

  return (
    <section className="products-container">
      {productos.map((e) => (
        <CardProducto
          key={e.id}
          id={e.id}
          name={e.title}
          category={e.category}
          stock={e.stock}
          price={e.price}
          brand={e.brand}
          rating={e.rating}
          imageUrl={e.thumbnail}
        />
      ))}
    </section>
    )

}