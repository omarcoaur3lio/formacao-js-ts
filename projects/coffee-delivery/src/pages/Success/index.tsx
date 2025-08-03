import { Container } from "../../styles/global";
import { ContentContainer } from "./styles";

import deliveryImg from "../../assets/delivery.svg";
import { ItemIcon } from "../../components/ItemIcon";

import { useTheme } from "styled-components";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Address {
  cep: string;
  city: string;
  neighborhood: string;
  number: number;
  street: string;
  uf: string;
  complement?: string;
}

export function Success() {
  const theme = useTheme();

  const [address, setAddress] = useState<Address>({} as Address);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    setAddress(state.data);
    setSelectedPaymentMethod(
      parseSelectedPaymentMethod(state.selectedPaymentMethod)
    );
  }, [state]);

  function parseSelectedPaymentMethod(selectedPaymentMethod: string) {
    switch (selectedPaymentMethod) {
      case "creditCard":
        return "Cartão de Credito";
      case "debitCard":
        return "Cartão de Debito";
      case "money":
        return "Dinheiro";
      default:
        return "";
    }
  }

  return (
    <Container>
      <ContentContainer>
        <div className="content">
          <div className="mainContainer">
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <div className="mainContentContainer">
              <div className="informationContainer">
                <div className="informationCard">
                  <div className="informationCardModule">
                    <div className="infoItem">
                      <ItemIcon color={theme.colors.purple}>
                        <MapPin weight="fill" size={16} />
                      </ItemIcon>
                      <p>
                        Entrega em{" "}
                        <strong>
                          Rua {address.street}, {address.number}
                        </strong>{" "}
                        {address.neighborhood}{" "}
                        {address.complement && `(${address.complement})`} -{" "}
                        {address.city}, {address.uf}.
                      </p>
                    </div>
                    <div className="infoItem">
                      <ItemIcon color={theme.colors.yellow}>
                        <Timer weight="fill" size={16} />
                      </ItemIcon>
                      <p>
                        Previsão de entrega <br />
                        <strong> 20 min - 30 min</strong>
                      </p>
                    </div>
                    <div className="infoItem">
                      <ItemIcon color={theme.colors.yellowDark}>
                        <CurrencyDollar size={16} />
                      </ItemIcon>
                      <p>
                        Pagamento na entrega <br />
                        <strong> {selectedPaymentMethod}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src={deliveryImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}
