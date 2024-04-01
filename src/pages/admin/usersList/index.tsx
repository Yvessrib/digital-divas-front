import {
  Breadcrumbs,
  ContentContainer,
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  PageContainer,
  Pagination,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
} from './styles'

import PlusIcon from '../../../assets/icons/Plus.svg'
import PlusIcon2 from '../../../assets/icons/Plus2.svg'
import projectsData from './teste.json' // Importando os dados do JSON
import { SideBar } from '../../../components/sideBar'
import { Header } from '../../../components/header'
import { Link } from 'react-router-dom'
import { FilterBarAndButton } from '../../../components/filter'

export function AdminUsersList() {
  return (
    <PageContainer>
      <SideBar></SideBar>
      <ContentContainer>
        <Header />

        <ProjectsContainer>
          <Breadcrumbs>Fetin 2024 / Usuários / Lista</Breadcrumbs>
          <ProjectsHeader>
            <span>Todos os Usuários</span>
            <ProjectsHeaderButtons>
              <button>
                <div>
                  <img src={PlusIcon} alt="" />
                  Importar Projeto
                </div>
              </button>

              <button>
                <Link
                  to={'projectsSignIn'}
                  style={{ textDecoration: 'none', color: '#FFF' }}
                >
                  <div>
                    <img src={PlusIcon2} alt="" />
                    Novo Projeto
                  </div>
                </Link>
              </button>
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
                    <th>Nível</th>
                    <th>Equipe</th>
                    <th>Orientador</th>
                    <th>Etapa</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsData.map((project) => (
                    <tr key={project.id}>
                      <td>{project.id}</td>
                      <td>{project.nome}</td>
                      <td>{project.nivel}</td>
                      <td>{project.equipe}</td>
                      <td>{project.orientador}</td>
                      <td>{project.etapa}</td>
                      <td>{project.status}</td>
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
      </ContentContainer>
    </PageContainer>
  )
}
