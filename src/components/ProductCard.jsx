import theme from "../theme";
import { FiBattery, FiSmartphone, FiCamera } from "react-icons/fi";

export default function ProductCard({ product, selected, toggleCompare }) {
  return (
    <div className={`${theme.cardBW} rounded-xl shadow p-4`}>
      <img
  src={product.image}
  alt={product.name}
  className="aspect-square w-full object-cover rounded-lg mb-3"
/>


      <h3 className={`text-xl font-semibold ${theme.textBW}`}>
        {product.name}
      </h3>

      <p className={theme.mutedBW}>{product.brand}</p>

      <p className={`text-lg font-bold mt-1 ${theme.textBW}`}>
        ${product.price}
      </p>

     
      <ul className={`text-sm mt-3 space-y-2 ${theme.mutedBW}`}>
        <li className="flex items-center gap-2">
          <FiBattery /> {product.features?.battery}
        </li>
        <li className="flex items-center gap-2">
          <FiSmartphone /> {product.features?.screen}
        </li>
        <li className="flex items-center gap-2">
          <FiCamera /> {product.features?.camera}
        </li>
      </ul>

      <button
        onClick={() => toggleCompare(product)}
        className={`mt-4 w-full py-2 rounded font-semibold ${
          selected ? theme.dangerBW : theme.primaryBW
        }`}
      >
        {selected ? "Remove" : "Add to Compare"}
      </button>
    </div>
  );
}
