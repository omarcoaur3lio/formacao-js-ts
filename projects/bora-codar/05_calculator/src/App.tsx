import "./App.css";
import equals from "./assets/equals.svg";
import percent from "./assets/percent.svg";
import divide from "./assets/divide.svg";
import multiply from "./assets/multiply.svg";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";
import result from "./assets/result.svg";
import minus_and_plus from "./assets/minus_and_plus.svg";
import { useState } from "react";

export function App() {
  const [lastCalc, setLastCalc] = useState("");
  const [stringToCalc, setStringToCalc] = useState('')
  const [resultCalc, setResultCalc] = useState('')
  
  function addValueToConcatenator(value: string) {

    const concatenator = stringToCalc + value
    
    setLastCalc(concatenator);
    setStringToCalc(concatenator);
  }

  function calculate() {
    if (stringToCalc[1] === '/' || stringToCalc[1] === '*'){
      setResultCalc("ERROR");
      setStringToCalc("");
      setLastCalc("");
      return;
    }
    if (!stringToCalc) {
      return
    }



    const result = eval(stringToCalc.replace(/%/g, "* 0.01")); 
    setResultCalc(result);
    
    setLastCalc(stringToCalc);
    setStringToCalc('')
  }

  function clear() {
    setStringToCalc('');
    setResultCalc('')
    setLastCalc('')
  }
  
  function clearEntry() {
    setLastCalc('')
    setStringToCalc('');
  }

  function toggleSignal() {
    if (lastCalc.startsWith("- ")) {
      setLastCalc(lastCalc.substring(1));
      setStringToCalc(stringToCalc.substring(1));
    } else {
      setLastCalc("- " + lastCalc);
      setStringToCalc("- " + stringToCalc);
    }
  }

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="lastCalc">{lastCalc}</div>
          <div className="result">
            <img src={equals} alt="Sinal de igual" />
            <span>{resultCalc}</span>
          </div>
        </div>
        <div className="keyboard">
          <button className="button secondary" onClick={clearEntry}>CE</button>
          <button className="button" onClick={clear}>C</button>
          <button className="button" onClick={() => addValueToConcatenator(' % ')} >
            <img src={percent} alt="Porcentagem" />
          </button>
          <button className="button tertiary" onClick={() => addValueToConcatenator(' / ')}>
            <img src={divide} alt="Dividir" />
          </button>
          <button className="button" onClick={() => addValueToConcatenator('7')}>7</button>
          <button className="button" onClick={() => addValueToConcatenator('8')}>8</button>
          <button className="button" onClick={() => addValueToConcatenator('9')}>9</button>
          <button className="button tertiary" onClick={() => addValueToConcatenator(' * ')}>
            <img src={multiply} alt="Multiplicar" />
          </button>
          <button className="button" onClick={() => addValueToConcatenator('4')}>4</button>
          <button className="button" onClick={() => addValueToConcatenator('5')}>5</button>
          <button className="button" onClick={() => addValueToConcatenator('6')}>6</button>
          <button className="button tertiary" onClick={() => addValueToConcatenator(' - ')}>
            <img src={minus} alt="Diminuir" />
          </button>
          <button className="button" onClick={() => addValueToConcatenator('1')}>1</button>
          <button className="button" onClick={() => addValueToConcatenator('2')}>2</button>
          <button className="button" onClick={() => addValueToConcatenator('3')}>3</button>
          <button className="button tertiary" onClick={() => addValueToConcatenator(' + ')}>
            <img src={plus} alt="Somar" />
          </button>
          <button className="button" onClick={toggleSignal}>
            <img src={minus_and_plus} alt="Alterar sinal" />
          </button>
          <button className="button" onClick={() => addValueToConcatenator('0')}>0</button>
          <button className="button" onClick={() => addValueToConcatenator('.')}>,</button>
          <button className="button quartiary"onClick={() => calculate()} >
            <img src={result} alt="Sinal de igualdade" />
          </button>
        </div>
      </div>
    </>
  );
}
