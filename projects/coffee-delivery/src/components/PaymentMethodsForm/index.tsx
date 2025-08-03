import { PaymentMethodsFormContainer } from "./styles";

import { CreditCard, Bank, Money } from "@phosphor-icons/react";

interface PaymentMethodsFormProps {
  setPaymentMethod: (method: "creditCard" | "debitCard" | "money") => void;
}

export function PaymentMethodsForm({
  setPaymentMethod,
}: PaymentMethodsFormProps) {
  return (
    <PaymentMethodsFormContainer>
      <input
        id="creditCard"
        name="payment"
        type="radio"
        onChange={() => setPaymentMethod("creditCard")}
      />
      <div className="paymentMethodCard">
        <CreditCard size={16} />
        <label htmlFor="creditCard">Cartão de Crédito</label>
      </div>

      <input
        id="debitCard"
        name="payment"
        type="radio"
        onChange={() => setPaymentMethod("debitCard")}
      />
      <div className="paymentMethodCard">
        <Bank size={16} />
        <label htmlFor="debitCard">Cartão de débito</label>
      </div>

      <input
        id="money"
        name="payment"
        type="radio"
        onChange={() => setPaymentMethod("money")}
      />
      <div className="paymentMethodCard">
        <Money size={16} />
        <label htmlFor="money">Dinheiro</label>
      </div>
    </PaymentMethodsFormContainer>
  );
}
