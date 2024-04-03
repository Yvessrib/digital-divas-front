import { FormFooter, InputContainer, LoginHeader } from './styles'
import { ButtonBlue } from '../../../components/buttonBlue'

export function LoginPasswordRefactor() {
  return (
    <div>
      <LoginHeader>
        <span>Redefinir senha</span>
        <span>Crie uma nova senha.</span>
      </LoginHeader>
      <div>
        <form>
          <InputContainer>
            <label>Email *</label>
            <input type="email" placeholder="Insira seu email"></input>
          </InputContainer>
          <FormFooter>
            <ButtonBlue text="Entrar" to="/login/passwordCode" />
          </FormFooter>
        </form>
      </div>
    </div>
  )
}
