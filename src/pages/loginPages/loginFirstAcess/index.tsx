import { FormFooter, InputContainer, LoginHeader } from './styles'
import { ButtonBlue } from '../../../components/buttonBlue'

export function LoginFirstAccess() {
  return (
    <div>
      <LoginHeader>
        <span>Primeiro acesso</span>
        <span>Crie uma nova senha.</span>
      </LoginHeader>
      <div>
        <form>
          <InputContainer>
            <label>Senha *</label>
            <input type="email" placeholder="Insira sua senha..."></input>
          </InputContainer>
          <InputContainer>
            <label>Confirmação *</label>
            <input
              type="password"
              placeholder="Insira sua senha novamente..."
            ></input>
          </InputContainer>
          <FormFooter>
            <ButtonBlue text="Entrar" to="/admin/projectsList" />
          </FormFooter>
        </form>
      </div>
    </div>
  )
}
