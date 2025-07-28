import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import UnitDropdown from '../components/UnitDropdown';
import ResultBox from '../components/ResultBox';
import { units, convert } from '../utils/conversionUtils';

const UnitConverter = () => {
  const categories = [
    { name: "📏 Length", value: "length" },
    { name: "⚖️ Weight", value: "weight" },
    { name: "🔥 Temperature", value: "temperature" },
    { name: "💸 Currency", value: "currency" },
    { name: "💽 Data", value: "data" },
    { name: "⏰ Time", value: "time" }
  ];

  const [input, setInput] = useState('');
  const [category, setCategory] = useState('length');
  const [from, setFrom] = useState(units['length'][0]);
  const [to, setTo] = useState(units['length'][1]);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (!input || isNaN(input)) {
      setResult('');
      return;
    }

    const res = convert(category, input, from, to);
    if (!isNaN(res)) {
      setResult(parseFloat(res).toFixed(3));
    } else {
      setResult('');
    }
  }, [category, input, from, to]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setFrom(units[cat][0]);
    setTo(units[cat][1]);
    setInput('');
    setResult('');
  };

  return (
    <div className="space-y-4">
      <select
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white shadow"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.name}
          </option>
        ))}
      </select>

      <InputField value={input} onChange={setInput} />

      <div className="flex gap-2">
        <UnitDropdown options={units[category]} selected={from} onChange={setFrom} />
        <UnitDropdown options={units[category]} selected={to} onChange={setTo} />
      </div>

      {result && <ResultBox from={from} to={to} input={input} result={result} />}
    </div>
  );
};

export default UnitConverter;
