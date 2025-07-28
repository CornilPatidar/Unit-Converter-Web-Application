const UnitDropdown = ({ options, selected, onChange }) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    className="flex-1 p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white shadow-inner"
  >
    {options.map((unit) => (
      <option key={unit}>{unit}</option>
    ))}
  </select>
);

export default UnitDropdown;