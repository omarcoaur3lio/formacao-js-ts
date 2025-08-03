import { MapPin } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo coffee delivery" />
      </Link>
      <div>
        <div className="location">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </div>
        <Link to="/checkout">
          <Cart />
        </Link>
      </div>
    </HeaderContainer>
  );
}
