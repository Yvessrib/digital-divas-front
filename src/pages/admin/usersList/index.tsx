import {
  Breadcrumbs,
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  Pagination,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
} from './styles'

import usersData from './teste.json' // Importando os dados do JSON
import { FilterBarAndButton } from '../../../components/filter'
import { ButtonWhite } from '../../../components/buttonWhite'
import { ButtonBlue } from '../../../components/buttonBlue'

export function AdminUsersList() {
  return (
    <ProjectsContainer>
      <Breadcrumbs>Fetin 2024 / Usuários / Lista</Breadcrumbs>
      <ProjectsHeader>
        <span>Todos os Usuários</span>
        <ProjectsHeaderButtons>
          <ButtonWhite text="Importar Usuário" to="" />
          <ButtonBlue text="Novo Usuário" to="" />
        </ProjectsHeaderButtons>
      </ProjectsHeader>
      <ListContainer>
        <ListHead>
          <button>ALUNOS</button>
          <button>ORIENTADORES</button>
          <button>ADMINSTRADORES</button>
        </ListHead>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Mat.</th>
                <th>Curso</th>
                <th>Período</th>
                <th>Instituto de Ensino</th>
                <th>País</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((users) => (
                <tr key={users.id}>
                  <td>{users.id}</td>
                  <td>{users.nome}</td>
                  <td>{users.mat}</td>
                  <td>{users.curso}</td>
                  <td>{users.periodo}</td>
                  <td>{users.instituicao}</td>
                  <td>{users.pais}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ListContent>
        <Pagination>
          <span>Linhas por página: 10</span>
          <span>280 projetos</span>
          <span>1 2 3 ... 123 124</span>
        </Pagination>
      </ListContainer>
    </ProjectsContainer>
  )
}
