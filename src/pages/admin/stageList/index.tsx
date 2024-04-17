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

export function AdminStagesList() {
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
          <button>LISTA</button>
          <button>TABELA</button>
          <button>CALENDÁRIO</button>
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
