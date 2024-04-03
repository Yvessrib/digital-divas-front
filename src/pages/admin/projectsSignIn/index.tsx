import {
  FormsTitle,
  ProjectFormContainer,
  ProjectsContainer,
  ProjectsHeader,
  Divider,
  StyledInput,
  GeneralInfo,
  InputContainer,
  StudentInfo,
  Divider2,
  ButtonDiv,
  FormsFooter,
  Breadcrumbs,
} from './styles'

import PlusIcon from '../../../assets/icons/Plus.svg'
import PlusIcon2 from '../../../assets/icons/Plus2.svg'

export function AdminProjectsSignIn() {
  return (
    <ProjectsContainer>
      <Breadcrumbs>Fetin 2024 / Projetos / Lista /Novo Projeto</Breadcrumbs>
      <ProjectsHeader>
        <span>Novo Projeto</span>
      </ProjectsHeader>

      <ProjectFormContainer>
        <form>
          <div>
            <FormsTitle>Informações Gerais</FormsTitle>
            <Divider></Divider>
            <GeneralInfo>
              <InputContainer>
                <label htmlFor="title">Id</label>
                <StyledInput
                  width="84px"
                  type="number"
                  id="id"
                  placeholder="#001"
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Nome do Projeto *</label>
                <StyledInput
                  width="880px"
                  type="text"
                  id="name"
                  placeholder="Insira o nome do projeto..."
                />
                <span>Até 200 caracteres.</span>
              </InputContainer>
            </GeneralInfo>
          </div>
          <div>
            <FormsTitle>Equipe</FormsTitle>
            <Divider></Divider>
            <InputContainer>
              <label htmlFor="description">Nome do Orientador *</label>
              <StyledInput
                type="text"
                id="nameAdvisor"
                placeholder="Insira o nome do orientador do projeto..."
              />
            </InputContainer>
            <StudentInfo>
              <InputContainer>
                <label htmlFor="description">Nome do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira o nome..."
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Matrícula do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira a matrícula..."
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Curso do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira o curso..."
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Período do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira o período..."
                />
              </InputContainer>
            </StudentInfo>
          </div>
          <ButtonDiv>
            <Divider2></Divider2>
            <button>
              <div>
                <img src={PlusIcon} alt="" />
                <span>Adicionar integrante</span>
              </div>
            </button>
            <Divider2></Divider2>
          </ButtonDiv>
          <FormsFooter>
            <button>
              <div>
                <img src={PlusIcon} alt="" />
                <span>Cancelar</span>
              </div>
            </button>
            <button>
              <div>
                <img src={PlusIcon2} alt="" />
                <span>Criar Projeto</span>
              </div>
            </button>
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
