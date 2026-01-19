import theme from "../theme";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-6">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className={`w-full pl-12 pr-4 py-3 rounded-lg border ${theme.border}
        ${theme.card} ${theme.text}`}
      />
    </div>
  );
}
