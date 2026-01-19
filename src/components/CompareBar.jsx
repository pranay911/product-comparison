import theme from "../theme";
import { FiX, FiTrash2 } from "react-icons/fi";

export default function CompareBar({ compare, remove, clear }) {
  return (
    <div className={`fixed bottom-0 left-0 right-0 ${theme.bgBW} ${theme.textBW} border-t-4 border-emerald-500 dark:border-emerald-400 shadow-2xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
            <span className={`text-xs sm:text-sm font-semibold ${theme.mutedBW}`}>
              Comparing {compare.length} product{compare.length !== 1 ? 's' : ''}:
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {compare.map(p => (
                <div 
                  key={p.id} 
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm bg-opacity-20 transition-all duration-200 ${
                    theme.cardBW
                  }`}
                >
                  <img src={p.image} alt={p.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded object-cover" />
                  <span className="hidden sm:inline">{p.name}</span>
                  <button 
                    onClick={() => remove(p.id)}
                    className="ml-1 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1 rounded hover:bg-white dark:hover:bg-slate-700"
                    title={`Remove ${p.name}`}
                  >
                    <FiX size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 text-sm sm:text-base ${theme.primaryBW} hover:scale-105 active:scale-95 whitespace-nowrap`}
            onClick={clear}
            title="Clear all comparisons"
          >
            <FiTrash2 size={18} />
            <span className="hidden sm:inline">Clear All</span>
            <span className="sm:hidden">Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
}
