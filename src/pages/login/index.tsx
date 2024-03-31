import {
  Divider,
  FormFooter,
  InputContainer,
  LoginContainer,
  LoginContent,
  LoginFooter,
  LoginForm,
  LoginHeader,
  LoginImg,
  LoginNotice,
} from './style'

import digitalLogo from '../../assets/imgs/DigitalDivasLogo.svg'
import loginFetinLogo from '../../assets/imgs/logoLogin.svg'
import iconBotao from '../../assets/icons/Plus2.svg'

export function LoginPage() {
  return (
    <LoginContainer>
      <LoginContent>
        <img src={loginFetinLogo} alt="" />
        <LoginHeader>
          <span>Boas vindas!</span>
          <span>
            Insira seus dados para acessar <b>Fetin App</b>.
          </span>
        </LoginHeader>
        <LoginForm>
          <form>
            <InputContainer>
              <label>Email *</label>
              <input type="email" placeholder="Insira seu e-mail..."></input>
            </InputContainer>
            <InputContainer>
              <label>Senha *</label>
              <input type="password" placeholder="Insira sua senha..."></input>
            </InputContainer>
            <FormFooter>
              <a>Esqueci minha senha</a>
              <button>
                <div>
                  <span>Entrar</span>
                  <img src={iconBotao} alt="" />
                </div>
              </button>
            </FormFooter>
          </form>
        </LoginForm>
        <Divider></Divider>
        <LoginNotice>
          <span>Ainda não possui cadastro?</span>
          <span>
            Mande um e-mail para fetin@inatel.br solicitando suas credenciais de
            acesso.
          </span>
        </LoginNotice>
        <LoginFooter>
          <img src={digitalLogo} alt="" />
        </LoginFooter>
      </LoginContent>
      <LoginImg></LoginImg>
    </LoginContainer>
  )
}
