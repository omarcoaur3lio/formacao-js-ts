import { useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { SearchContext } from "../../contexts/SearchContext";
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInput,
  SearchFormInputContainer,
} from "./styles";

import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

export function SearchForm() {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const { issues, fetchIssues } = useContext(SearchContext);

  const [debouncedSearch] = useDebounce(search, 1000);

  useEffect(() => {
    fetchIssues(debouncedSearch);
    if (searching) {
      setSearching(false);
    }
  }, [debouncedSearch, fetchIssues]);

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </SearchFormHeader>
      <SearchFormInputContainer>
        <SearchFormInput
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => {
            setSearching(true);
            setSearch(e.target.value);
          }}
        />
        {searching && <Dots size={14} color="#7C7C8A" />}
      </SearchFormInputContainer>
    </SearchFormContainer>
  );
}
