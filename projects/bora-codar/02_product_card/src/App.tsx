import "./App.css";
import { Button } from "./components/Button";

import product from "./assets/product.png";
import { Product3D } from "./components/Product3D";
import { useState } from "react";

export function App() {
  const [start3D, setStart3D] = useState(false);

  function handleClick() {
    setStart3D(!start3D);
  }

  return (
    <div className="app">
      <div className="product-image">
        {start3D ? (
          <Product3D />
        ) : (
          <img draggable={false} src={product} alt="Sofá rosé" />
        )}

        <div className="button-image-container">
          <Button start3D={start3D} onHandleClick={handleClick} />
        </div>
      </div>

      <div className="product-details">
        <h4>CÓDIGO: 42404</h4>
        <h1>Sofá Margot II - Rosé</h1>
        <p>R$ 4.000</p>
        <button>ADICIONAR À CESTA</button>
      </div>
    </div>
  );
}
