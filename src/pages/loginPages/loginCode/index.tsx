import { FormFooter, InputContainer, LoginHeader } from './styles'
import { ButtonBlue } from '../../../components/buttonBlue'

export function LoginPasswordCode() {
  return (
    <div>
      <LoginHeader>
        <span>Redefinir senha</span>
        <span>Insira o código enviado para seu e-mail.</span>
      </LoginHeader>
      <div>
        <form>
          <InputContainer>
            <label>Código</label>
            <input type="email" placeholder="Insira o código..."></input>
          </InputContainer>
          <FormFooter>
            <ButtonBlue text="Entrar" to="/login/passwordChange" />
          </FormFooter>
        </form>
      </div>
    </div>
  )
}
