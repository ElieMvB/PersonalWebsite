/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */

export function Input ({placeholder, value, onChange}) {
    return <div>
        <input 
            type="text" 
            value={value}
            className="border rounded px-3 py-2 w-full mt-4"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}