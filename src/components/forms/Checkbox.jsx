/**
 * 
 * @param {boolean} checked 
 * @param {(v: boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 * @returns 
 */

export function Checkbox({checked, onChange, label, id}) {
    return <div className="flex items-center gap-2 cursor-pointer mt-3">
        <input 
            id={id}
            type="checkbox"
            checked={checked}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="text-sm text-gray-700 select-none">
            {label}
        </label>
    </div>
}