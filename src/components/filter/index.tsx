import { FilterContainer, SearchBar } from './style'

import FilterIcon from '../../assets/icons/filterIcon.svg'

export function FilterBarAndButton() {
  return (
    <FilterContainer>
      <SearchBar>
        <input type="text" placeholder="Pesquisar..."></input>
      </SearchBar>
      <button>
        <div>
          <img src={FilterIcon} alt="" />
          Filtrar
        </div>
      </button>
      <button>
        <div>
          <img src={FilterIcon} alt="" />
          Ordenar
        </div>
      </button>
    </FilterContainer>
  )
}
