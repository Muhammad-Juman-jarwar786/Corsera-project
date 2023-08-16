import { useState } from 'react';

const Budget = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('dollar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currencies = [
    { code: 'dollar', symbol: '$', name: 'Dollar' },
    { code: 'pound', symbol: '£', name: 'Pound' },
    { code: 'euro', symbol: '€', name: 'Euro' },
    { code: 'rupee', symbol: '₹', name: 'Rupee' },
  ];

  const handleCurrencyChange = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    setIsMenuOpen(false);
  };

  return (
    <div className="mx-20 mt-10">
      <h1 className="text-4xl font-bold">Company's Budget Allocation</h1>
      <div className="grid grid-cols-4 mt-10 text-white font-bold">
        <div className="bg-slate-400 p-4 w-80 flex rounded-lg ">
          <label className="text-xl" htmlFor="budget">
            Budget: $
          </label>
          <input
            className="text-xl text-gray-700 outline-none border-2 border-slate-400 rounded-lg w-48"
            type="number"
          />
        </div>
        <div className="bg-slate-400 p-4 w-80 flex rounded-lg text-xl">
          Remaining $1024
        </div>
        <div className="bg-slate-400 p-4 w-80 flex rounded-lg text-xl">
          Spent So Far $960
        </div>
        <div className="bg-slate-400 p-4 w-80 flex rounded-lg text-xl relative">
          currency (
          {
            currencies.find((currency) => currency.code === selectedCurrency)
              ?.symbol
          }{' '}
          {
            currencies.find((currency) => currency.code === selectedCurrency)
              ?.name
          }
          )
          <i
            className="fa-solid fa-angle-down mt-2 cursor-pointer text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
          <div
            className={`bg-transparent outline-none ${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-14`}
          >
            {currencies.map((currency) => (
              <div
                key={currency.code}
                className={`bg-slate-400 cursor-pointer w-36 hover:bg-green-500 ${
                  selectedCurrency === currency.code ? 'font-bold' : ''
                }`}
                onClick={() => handleCurrencyChange(currency.code)}
              >
                {currency.symbol} {currency.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-3xl">Allocation</div>
      </div>
      <div></div>
    </div>
  );
};

export default Budget;
