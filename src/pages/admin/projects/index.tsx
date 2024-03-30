import {
  Breadcrumbs,
  Divider,
  Header,
  ListContainer,
  ListContent,
  ListHead,
  PageContainer,
  Pagination,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
  SideBar,
} from './styles'

import PlusIcon from '../../../assets/icons/Plus.svg'
import PlusIcon2 from '../../../assets/icons/Plus2.svg'
import projectsData from './teste.json' // Importando os dados do JSON

export function AdminProjectsList() {
  return (
    <PageContainer>
      <SideBar></SideBar>
      <div>
        <Header></Header>

        <ProjectsContainer>
          <Breadcrumbs>Fetin 2024 / Projetos / Lista</Breadcrumbs>
          <ProjectsHeader>
            <span>Todos os Projetos</span>
            <ProjectsHeaderButtons>
              <button>
                <div>
                  <img src={PlusIcon} alt="" />
                  Importar Projeto
                </div>
              </button>
              <button>
                <div>
                  <img src={PlusIcon2} alt="" />
                  Novo Projeto
                </div>
              </button>
            </ProjectsHeaderButtons>
          </ProjectsHeader>

          <ListContainer>
            <ListHead>
              <button>Todos os níveis</button>
              <button>Nível 1</button>
              <button>Nível 2</button>
              <button>Nível 3</button>
              <button>Nível 4</button>
            </ListHead>
            <Divider></Divider>
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
      </div>
    </PageContainer>
  )
}
