import { ShoppingCart } from "@phosphor-icons/react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export function Cart() {

  const { cart } = useContext(CartContext)

  function intemsInCart() {
    // Verificar se o item ja existe no carrinho, se existir, somar as quantidades dos itens
    let totalQuantity = 0;

    cart.forEach(item => {
      totalQuantity += item.quantity;
    });

    return totalQuantity;
    
  }

  return (
    <div className="cart">
      <ShoppingCart weight="fill" size={22} />
      <span>{intemsInCart()}</span>
    </div>
  );
}
