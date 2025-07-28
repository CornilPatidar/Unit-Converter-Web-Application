import React, { useState } from "react";

const UnitConverter = () => {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const units = {
    length: ["Meter", "Kilometer", "Mile", "Yard"],
    weight: ["Gram", "Kilogram", "Pound", "Ounce"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    currency: ["USD", "CAD", "INR", "EUR"],
    data: ["Byte", "KB", "MB", "GB"],
    time: ["Second", "Minute", "Hour", "Day"],
  };

  const convert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || !fromUnit || !toUnit || fromUnit === toUnit) {
      setConvertedValue("");
      return;
    }

    // Sample conversion logic (can be expanded)
    let result = value;

    if (category === "length") {
      const conversionRates = {
        Meter: 1,
        Kilometer: 0.001,
        Mile: 0.000621371,
        Yard: 1.09361,
      };
      result = (value / conversionRates[fromUnit]) * conversionRates[toUnit];
    }

    setConvertedValue(result.toFixed(4));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Unit Converter</h1>

      <select
        className="w-full mb-4 p-2 border"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setFromUnit("");
          setToUnit("");
          setConvertedValue("");
        }}
      >
        {Object.keys(units).map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <div className="flex gap-2 mb-4">
        <select
          className="flex-1 p-2 border"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="">From</option>
          {units[category].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <select
          className="flex-1 p-2 border"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="">To</option>
          {units[category].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <input
        type="number"
        className="w-full p-2 border mb-4"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        className="w-full bg-blue-500 text-white p-2 rounded"
        onClick={convert}
      >
        Convert
      </button>

      {convertedValue && (
        <p className="mt-4 text-center text-xl font-semibold">
          Result: {convertedValue}
        </p>
      )}
    </div>
  );
};

export default UnitConverter;
