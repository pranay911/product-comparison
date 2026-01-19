import theme from "../theme";
import { FiBattery, FiSmartphone, FiCamera } from "react-icons/fi";

export default function CompareTable({ compare }) {
  const features = [
    { key: "battery", label: "Battery", icon: FiBattery },
    { key: "screen", label: "Screen", icon: FiSmartphone },
    { key: "camera", label: "Camera", icon: FiCamera }
  ];

  return (
    <div className="mt-8 sm:mt-10 transition-colors duration-500">
      <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${theme.textBW}`}>
        Detailed Comparison
      </h2>
      
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className={`w-full border-collapse`}>
          <thead className={`${theme.cardBW} sticky top-0 z-10`}>
            <tr>
              <th className={`p-4 sm:p-6 text-left font-bold text-sm sm:text-base ${theme.textBW} border-b-2 border-slate-300 dark:border-slate-600`}>
                Feature
              </th>
              {compare.map(p => (
                <th key={p.id} className={`p-4 sm:p-6 text-center font-bold text-sm sm:text-base ${theme.textBW} border-b-2 border-slate-300 dark:border-slate-600`}>
                  <div className="flex flex-col items-center gap-2">
                    <img src={p.image} alt={p.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg" />
                    <div>
                      <p className="font-bold">{p.name}</p>
                      <p className={`text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400`}>
                        ${p.price}
                      </p>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((f, idx) => {
              const IconComponent = f.icon;
              return (
                <tr key={f.key} className={idx % 2 === 0 ? theme.cardBW : `${theme.cardBW} opacity-70`}>
                  <td className={`p-4 sm:p-6 font-semibold text-sm sm:text-base ${theme.textBW} border-r-2 border-slate-300 dark:border-slate-600`}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <IconComponent size={20} className="text-emerald-600 dark:text-emerald-400" />
                      <span>{f.label}</span>
                    </div>
                  </td>
                  {compare.map(p => (
                    <td key={p.id} className={`p-4 sm:p-6 text-center text-xs sm:text-sm ${theme.mutedBW} border-l-2 border-slate-300 dark:border-slate-600`}>
                      <span className="font-medium">{p.features[f.key]}</span>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
