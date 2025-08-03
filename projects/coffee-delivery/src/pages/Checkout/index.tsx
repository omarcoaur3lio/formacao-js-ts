import { useTheme } from "styled-components";
import { Container } from "../../styles/global";
import { CheckoutContainer } from "./styles";

import {
  MapPinLine,
  CurrencyDollar,
  ShoppingCart,
} from "@phosphor-icons/react";
import { PaymentMethodsForm } from "../../components/PaymentMethodsForm";
import { CartItemDescription } from "../../components/CartItemDescription";
import { Button } from "../../components/Button";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const deliveryFormValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP inválido").max(8, "CEP inválido"),
  street: zod.string().min(1, "Rua inválida"),
  number: zod.number().positive().min(1, "Número inválido"),
  neighborhood: zod.string().min(1, "Bairro inválido"),
  city: zod.string().min(1, "Cidade inválida"),
  uf: zod.string().min(2, "UF inválida"),
  complement: zod.string(),
});

export function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const { cart, getTotalProductsPrice, clearCart } = useContext(CartContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(deliveryFormValidationSchema),
  });

  useEffect(() => {
    if (Object.keys(formState.errors).length > 0 && cart.length !== 0) {
      toast.error("Preencha todos os campos obrigatórios");
    }
  }, [cart, formState]);

  function handleSendOrder(data: any) {
    if (!selectedPaymentMethod) {
      toast.error("Selecione uma forma de pagamento");
      return;
    }
    console.log("Enviando pedido...");
    console.log("Forma de pagamento: " + selectedPaymentMethod);
    console.log(data);
    clearCart();
    navigate("/success", { state: { selectedPaymentMethod, data } });
  }

  function getTotal() {
    const total = Number(getTotalProductsPrice().replace(",", ".")) + 3.5;
    if (total === 3.5) {
      return "0,00";
    }
    const formattedTotal = total.toFixed(2).replace(".", ",");
    return formattedTotal;
  }

  return (
    <Container>
      <Toaster position="top-center" />
      <CheckoutContainer>
        <form
          id="orderForm"
          onSubmit={handleSubmit(handleSendOrder)}
          className="formContainer"
        >
          <h3>Complete seu pedido</h3>
          <div className="formCard">
            <div className="formCardHeader">
              <MapPinLine size={22} color={theme.colors.yellowDark} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="inputsContainer">
              <input
                minLength={8}
                maxLength={8}
                placeholder="CEP"
                className="input inputShort"
                {...register("cep")}
              />
              <input
                placeholder="Rua"
                className="input"
                {...register("street")}
              />
              <div>
                <input
                  className="input inputShort"
                  placeholder="Número"
                  {...register("number", { valueAsNumber: true })}
                />
                <div className="input">
                  <input
                    className="inputOptional"
                    placeholder="Complemento"
                    {...register("complement")}
                  />
                  <span>Opcional</span>
                </div>
              </div>
              <div>
                <input
                  className="input inputShort"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                />
                <input
                  className="input"
                  placeholder="Cidade"
                  {...register("city")}
                />
                <input
                  type="text"
                  maxLength={2}
                  className="input inputExtraShort"
                  placeholder="UF"
                  {...register("uf")}
                />
              </div>
            </div>
          </div>

          <div className="formCard">
            <div className="formCardHeader">
              <CurrencyDollar size={22} color={theme.colors.purple} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="paymentMethodsForm">
              <PaymentMethodsForm setPaymentMethod={setSelectedPaymentMethod} />
            </div>
          </div>
        </form>

        <div className="cartContentContainer">
          <h3>Cafés selecionados</h3>

          <div className="cartContentCard">
            {cart.length === 0 ? (
              <div className="emptyCartContainer">
                <ShoppingCart size={32} color={theme.colors.baseLabel} />
                <p>Seu carrinho esta vazio.</p>
                <p>
                  <Link className="link" to="/">
                    Clique aqui
                  </Link>{" "}
                  para adicionar itens.
                </p>
              </div>
            ) : (
              cart.map((product) => (
                <CartItemDescription
                  key={product.productId}
                  productId={product.productId}
                />
              ))
            )}
            <div className="separator" />

            <div className="totalContainer">
              <div>
                <p>Total de itens</p>
                <p>R$ {getTotalProductsPrice()}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div>
                <span>Total</span>
                <span>R$ {getTotal()}</span>
              </div>
            </div>

            <Button
              disabled={cart.length === 0}
              form="orderForm"
              title="Confirmar Pedido"
              type="submit"
              variant="primary"
            />
          </div>
        </div>
      </CheckoutContainer>
    </Container>
  );
}
