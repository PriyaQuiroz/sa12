export default function CardProducto({
  category,
  name,
  stock,
  price,
  brand,
  rating,
  imageUrl,
}) {
  return (
    <article className="card-producto">
      <div className="card-imagen-contenedor">
        <img src={imageUrl} alt={name} className="card-imagen" />
        <span className="card-precio">${price}</span>
      </div>

      <div className="card-contenido">
        <span className="card-categoria">{category}</span>
        <h3 className="card-titulo">{name}</h3>
        {brand && <p className="card-marca">Marca: {brand}</p>}
        <p className="card-rating">Calificación: ⭐ {rating}</p>
        <p className="card-stock">
          Stock disponible: <strong>{stock}</strong>
        </p>
      </div>
    </article>
  );
}
