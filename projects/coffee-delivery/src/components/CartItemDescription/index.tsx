import { CartItemContainer } from "./style";
import { InputNumber } from "../InputNumber";
import { Button } from "../Button";
import { Trash } from "@phosphor-icons/react";
import { ProductList } from "../../api/products";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

interface CartItemProps {
  productId: number;
}

export function CartItemDescription({ productId }: CartItemProps) {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const { removeAllProducts } = useContext(CartContext);

  useEffect(() => {
    getProductDetails(productId);
  });

  function getProductDetails(productId: number) {
    const product = ProductList.find((item) => item.id === productId);
    if (product) {
      setProductName(product.name);
      setProductImage(product.image);
      setProductPrice(product.price);
    }
  }

  return (
    <CartItemContainer>
      <div className="itemContainer">
        <img src={productImage} width={64} alt="Imagem do seu café" />
        <div className="itemInfo">
          <span>{productName}</span>
          <div className="itemQuantity">
            <InputNumber productId={productId} />
            <Button
              variant="secondary"
              title="Remover"
              handleOnClick={() => removeAllProducts(productId)}
            >
              <Trash size={16} />
            </Button>
          </div>
        </div>
      </div>
      <span className="price">R$ {productPrice}</span>
    </CartItemContainer>
  );
}
