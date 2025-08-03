import { useContext, useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { InputNumberContainer } from "./styles";
import { CartContext } from "../../context/CartContext";

interface InputNumberProps {
  productId: number;
}

export function InputNumber({ productId }: InputNumberProps) {
  const [count, setCount] = useState(0);

  const { addProduct, cart, removeProduct } = useContext(CartContext);

  function handleAddProduct() {
    setCount(count + 1);
    addProduct(productId);
  }

  function handleRemoveProduct() {
    setCount(count - 1);
    removeProduct(productId);
  }

  function getQuantity(productId: number) {
    const product = cart.find((item) => item.productId === productId);
    if (product) {
      return product.quantity;
    }
    return 0;
  }

  return (
    <InputNumberContainer>
      <button
        onClick={handleRemoveProduct}
        disabled={getQuantity(productId) === 0}
      >
        <Minus weight="bold" size={14} />
      </button>
      <span>{getQuantity(productId)}</span>
      <button onClick={handleAddProduct}>
        <Plus weight="bold" size={14} />
      </button>
    </InputNumberContainer>
  );
}
