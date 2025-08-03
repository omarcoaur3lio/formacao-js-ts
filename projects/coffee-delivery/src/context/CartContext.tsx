import { createContext, useState } from "react";
import { ProductList } from "../api/products";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextData {
  productId: number;
  quantity: number;
}

interface CartContextType {
  cart: CartContextData[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  removeAllProducts: (productId: number) => void;
  getTotalProductsPrice: () => string;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartContextData[]>([]);

  function addProduct(productId: number) {
    // Verificar se o item ja existe no carrinho, se existir, incrementar a quantidade
    if (cart.some((item) => item.productId === productId)) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
  }

  function removeProduct(productId: number) {
    if (cart.some((item) => item.productId === productId)) {
      setCart(
        cart
          .map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  }

  function removeAllProducts(productId: number) {
    setCart(cart.filter((item) => item.productId !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalProductsPrice() {
    let total = 0;
    cart.forEach((item) => {
      const product = ProductList.find(
        (product) => product.id === item.productId
      );
      if (product) {
        const productPrice = Number(product.price.replace(",", "."));
        total += productPrice * item.quantity;
      }
    });
    return total.toFixed(2).replace(".", ",");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        getTotalProductsPrice,
        removeAllProducts,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
