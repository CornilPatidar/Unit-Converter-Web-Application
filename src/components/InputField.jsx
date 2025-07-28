const InputField = ({ value, onChange }) => (
  <input
    type="number"
    placeholder="Enter value"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default InputField;