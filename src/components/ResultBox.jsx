const ResultBox = ({ from, to, input, result }) => (
  <div className="mt-4 p-4 rounded bg-green-100 dark:bg-green-800 text-center text-lg font-semibold">
    {input} {from} = {result} {to}
  </div>
);

export default ResultBox;