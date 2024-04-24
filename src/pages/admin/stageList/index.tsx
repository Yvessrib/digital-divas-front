import {
  Breadcrumbs,
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
} from './styles'

import { FilterBarAndButton } from '../../../components/filter'
import { ButtonBlue } from '../../../components/buttonBlue'
import { StageCard } from '../../../components/stageCard'
import { SetStateAction, useState } from 'react'

export function AdminStagesList() {
  const [activeFilter, setActiveFilter] = useState('LISTA')

  const handleFilterClick = (filter: SetStateAction<string>) => {
    setActiveFilter(filter)
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs>Fetin 2024 / Etapas / Lista</Breadcrumbs>
      <ProjectsHeader>
        <span>Todos as Etapas</span>
        <ProjectsHeaderButtons>
          <ButtonBlue text="Nova Etapa" to="" />
        </ProjectsHeaderButtons>
      </ProjectsHeader>
      <ListContainer>
        <ListHead>
          <button
            className={activeFilter === 'LISTA' ? 'active' : ''}
            onClick={() => handleFilterClick('LISTA')}
          >
            LISTA
          </button>
          <button
            className={activeFilter === 'TABELA' ? 'active' : ''}
            onClick={() => handleFilterClick('TABELA')}
          >
            TABELA
          </button>
          <button
            className={activeFilter === 'CALENDÁRIO' ? 'active' : ''}
            onClick={() => handleFilterClick('CALENDÁRIO')}
          >
            CALENDÁRIO
          </button>
        </ListHead>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>
          <StageCard />
        </ListContent>
      </ListContainer>
    </ProjectsContainer>
  )
}
