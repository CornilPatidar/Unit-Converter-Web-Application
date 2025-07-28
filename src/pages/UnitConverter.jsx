// Importing necessary tools and components from React and local files
import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField'; // Input box for number
import UnitDropdown from '../components/UnitDropdown'; // Dropdown for units (e.g., meter, feet)
import ResultBox from '../components/ResultBox'; // Component to show final result
import { units, convert } from '../utils/conversionUtils'; // Unit list and convert function

// Main component for the unit converter
const UnitConverter = () => {
  // State to store selected category (e.g., Length, Weight)
  const [category, setCategory] = useState('Length');

  // State to store user's input number
  const [input, setInput] = useState('');

  // State to store 'from' and 'to' units
  const [from, setFrom] = useState(units['Length'][0]);
  const [to, setTo] = useState(units['Length'][1]);

  // State to store the final result
  const [result, setResult] = useState('');

  // Whenever input/category/from/to changes, try converting
  useEffect(() => {
    // If input is empty or not a valid number, clear result
    if (!input || isNaN(input)) {
      setResult('');
      return;
    }

    // Call the convert function to get the converted value
    const res = convert(category, input, from, to);

    // If result is a number, format it to 3 decimal places
    if (!isNaN(res)) {
      setResult(parseFloat(res).toFixed(3));
    } else {
      setResult('');
    }
  }, [category, input, from, to]);

  // When user changes the category (e.g., from Length to Weight)
  const handleCategoryChange = (cat) => {
    setCategory(cat); // Update category
    setFrom(units[cat][0]); // Set default 'from' unit
    setTo(units[cat][1]);   // Set default 'to' unit
    setInput(''); // Clear input
    setResult(''); // Clear result
  };

  // JSX for rendering the converter UI
  return (
    <div className="space-y-4">
      {/* Dropdown to select conversion category */}
      <select
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white shadow"
      >
        {/* Render all category options (Length, Weight, etc.) */}
        {Object.keys(units).map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      {/* User input field */}
      <InputField value={input} onChange={setInput} />

      {/* Unit selection dropdowns (from & to) */}
      <div className="flex gap-2">
        <UnitDropdown options={units[category]} selected={from} onChange={setFrom} />
        <UnitDropdown options={units[category]} selected={to} onChange={setTo} />
      </div>

      {/* Show result only if it exists */}
      {result && <ResultBox from={from} to={to} input={input} result={result} />}
    </div>
  );
};

// Exporting the component to be used in other parts of the app
export default UnitConverter;
