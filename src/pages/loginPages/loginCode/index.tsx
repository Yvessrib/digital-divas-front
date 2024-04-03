import { FormFooter, InputContainer, LoginHeader } from './styles'
import iconBotao from '../../../assets/icons/Plus2.svg'
import { Link } from 'react-router-dom'

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
            <Link
              to={'/login/passwordChange'}
              style={{ textDecoration: 'none' }}
            >
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
    </div>
  )
}
