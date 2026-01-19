import { useEffect, useState } from "react";
import productsData from "./data/Products";
import ProductList from "./components/ProductList";
import CompareBar from "./components/CompareBar";
import CompareTable from "./components/CompareTable";
import SearchBar from "./components/SearchBar";
import theme from "./theme";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

export default function App() {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [compare, setCompare] = useState(
    JSON.parse(localStorage.getItem("compare")) || []
  );

  const [search, setSearch] = useState("");

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : getSystemTheme();
  });

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare));
  }, [compare]);


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleCompare = (product) => {
    setCompare(prev => {
      if (prev.find(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length < 3) {
        return [...prev, product];
      }
      return prev;
    });
  };

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-500`}>

      <div className={`max-w-7xl mx-auto px-6 py-8 ${compare.length ? "pb-28" : ""}`}>

        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Product Comparison</h1>
            <p className={theme.muted}>Compare up to 3 products</p>
          </div>

          <button
            onClick={() => setDark(prev => !prev)}
            className={`flex items-center gap-2 px-4 py-2 border ${theme.border} rounded-lg`}
          >
            {dark ? <MdDarkMode size={20} /> : <CiDark size={20} />}
            {dark ? "Dark" : "Light"}
          </button>

        </header>

        <SearchBar value={search} onChange={setSearch} />


        <ProductList
          products={productsData.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )}
          compare={compare}
          toggleCompare={toggleCompare}
        />


        {compare.length >= 2 && <CompareTable compare={compare} />}

        {compare.length >= 1 && (
          <CompareBar
            compare={compare}
            remove={(id) =>
              setCompare(prev => prev.filter(p => p.id !== id))
            }
            clear={() => setCompare([])}
          />
        )}
      </div>
    </div>
  );
}
