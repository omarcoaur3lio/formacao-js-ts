import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import LandingImg from "../../assets/landing-img.png";
import { LandingContainer, ProductsContainer } from "./styles";
import { ItemIcon } from "../../components/ItemIcon";
import { useTheme } from "styled-components";
import { CardProduct } from "../../components/CardProduct";
import { useEffect, useState } from "react";
import { Product, ProductList } from "../../api/products";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(ProductList);
  }, []);

  const theme = useTheme();
  return (
    <>
      <LandingContainer>
        <div className="contentContainer">
          <div>
            <h1 className="title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div className="itemsContainer">
              <div className="infoItemsContainer">
                <ItemIcon
                  color={theme.colors.yellowDark}
                  description="Compra simples e segura"
                >
                  <ShoppingCart weight="fill" size={16} />
                </ItemIcon>
                <ItemIcon
                  color={theme.colors.yellow}
                  description="Entrega rápida e rastreada"
                >
                  <Timer weight="fill" size={16} />
                </ItemIcon>
              </div>

              <div className="infoItemsContainer">
                <ItemIcon
                  color={theme.colors.baseText}
                  description="Embalagem mantém o café intacto"
                >
                  <Package weight="fill" size={16} />
                </ItemIcon>

                <ItemIcon
                  color={theme.colors.purple}
                  description="O café chega fresquinho até você"
                >
                  <Coffee weight="fill" size={16} />
                </ItemIcon>
              </div>
            </div>
          </div>

          <div className="imgContainer">
            <img src={LandingImg} alt="Coffee Delivery" />
          </div>
        </div>
      </LandingContainer>
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <div className="productsListContainer">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </ProductsContainer>
    </>
  );
}
