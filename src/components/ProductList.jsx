import ProductCard from "./ProductCard";

export default function ProductList({ products, compare, toggleCompare }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selected={compare.some((c) => c.id === product.id)}
          toggleCompare={toggleCompare}
        />
      ))}
    </div>
  );
}
