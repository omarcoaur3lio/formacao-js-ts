import { EmptySearchContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

export function EmptySearch() {
  return (
    <EmptySearchContainer>
      <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
      <span>Busque por um repositório para listar suas issues</span>
    </EmptySearchContainer>
  );
}
