export function RangeBar ({label, id, value, onChange}) {
    return <div>
        <label htmlFor={id} className="text-sm text-gray-700 select-none">
            {label}
        </label>
        <input 
            type="range" 
            className="w-full h-2 bg-gray-200 rounded-lg accent-blue-600 cursor-pointer"
            min="0"
            max="100"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}