import {
  Divider,
  FormFooter,
  InputContainer,
  LoginHeader,
  LoginNotice,
} from './style'

import iconBotao from '../../assets/icons/Plus2.svg'
import { Link } from 'react-router-dom'

export function LoginPage() {
  return (
    <div>
      <LoginHeader>
        <span>Boas vindas!</span>
        <span>
          Insira seus dados para acessar <b>Fetin App</b>.
        </span>
      </LoginHeader>
      <div>
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
            <Link to={'/login/firstAcess'} style={{ textDecoration: 'none' }}>
              <button>
                <div>
                  <span>Entrar</span>

                  <img src={iconBotao} alt="" />
                </div>
              </button>
            </Link>
          </FormFooter>
        </form>
      </div>
      <Divider></Divider>
      <LoginNotice>
        <span>Ainda não possui cadastro?</span>
        <span>
          Mande um e-mail para fetin@inatel.br solicitando suas credenciais de
          acesso.
        </span>
      </LoginNotice>
    </div>
  )
}
