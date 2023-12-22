'use client';
import { useState } from "react";

export default function Home() {

  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');


  const handleButtonClick = (value) => {
    if (value === '='){
      try{
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      }
      catch (error) {
        setResult('Error');
      }
    }
    else if (value === 'C'){
      setResult('');
      setExpression('');
    }
    else{
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];


  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Calculator</h1>

      <div className="bg-gradient-to-r from-blue-300 via blue-400 to-blue-500 p-6 rounded-lg shadow-lg max-w-lg ">
          <input
            type = "text"
            className="w-full bg-opacity-0 mb-2 text-xl md:text-2xl lg:text-3xl border-b-2 rounded-lg p-2"
            value={expression}
            readOnly
          />

          <input 
            type="text"
            className='w-full text-2xl md:text-3xl lg:text-4xl font-bold border-black mb-4 rounded-lg p-2 focus:outline-none'
            value={result}
            readOnly
          />



          <div className="grid grid-cols-4 gap-3">
            
            {buttons.map((btn)=>(<button
            key={btn}
            onClick={()=>handleButtonClick(btn)}
            className="text-2xl md:text-3xl lg:text-4xl bg-gray-100 hover:bg-gray-200 hover:scale-x-110 hover:scale-y-110 p-2 rounded-lg"
            >
              {btn}
            </button>
            ))}

          </div>
      </div>

    </main>
  )
}
