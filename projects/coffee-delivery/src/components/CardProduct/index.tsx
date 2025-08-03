import { ShoppingCart } from "@phosphor-icons/react";
import { CardContainer } from "./styles";
import { InputNumber } from "../InputNumber";
import { Product } from "../../api/products";

interface CardProductProps {
  product: Product;
}

export function CardProduct({ product }: CardProductProps) {
  return (
    <CardContainer>
      <img src={product.image} alt="" />
      <div className="tagContainer">
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <footer>
        <div>
          <span>R$</span>
          <h4>{product.price}</h4>
        </div>
        <div>
          <InputNumber productId={product.id} />
          <div className="cart">
            <ShoppingCart weight="fill" size={22} />
          </div>
        </div>
      </footer>
    </CardContainer>
  );
}
