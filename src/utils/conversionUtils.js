export const units = {
  Length: ['Meters', 'Kilometers', 'Miles', 'Inches'],
  Weight: ['Grams', 'Kilograms', 'Pounds', 'Ounces'],
  Temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
  Time: ['Seconds', 'Minutes', 'Hours'],
  Data: ['Bytes', 'KB', 'MB', 'GB'],
  Currency: ['USD', 'EUR', 'INR'], // mock for now
};

export function convert(category, value, from, to) {
  value = parseFloat(value);
  if (isNaN(value)) return 'Invalid input';

  const maps = {
    Length: { Meters: 1, Kilometers: 1000, Miles: 1609.34, Inches: 0.0254 },
    Weight: { Grams: 1, Kilograms: 1000, Pounds: 453.592, Ounces: 28.3495 },
    Time: { Seconds: 1, Minutes: 60, Hours: 3600 },
    Data: { Bytes: 1, KB: 1024, MB: 1048576, GB: 1073741824 },
    Currency: { USD: 1, EUR: 0.9, INR: 83 }, // mock rates
  };

  if (category === 'Temperature') {
    if (from === to) return value;
    if (from === 'Celsius') {
      return to === 'Fahrenheit' ? value * 9/5 + 32 : value + 273.15;
    } else if (from === 'Fahrenheit') {
      return to === 'Celsius' ? (value - 32) * 5/9 : (value - 32) * 5/9 + 273.15;
    } else {
      return to === 'Celsius' ? value - 273.15 : (value - 273.15) * 9/5 + 32;
    }
  }

  const map = maps[category];
  return (value * map[from]) / map[to];
}