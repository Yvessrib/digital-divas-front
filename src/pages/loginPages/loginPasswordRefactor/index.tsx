import { FormFooter, InputContainer, LoginHeader } from './styles'
import iconBotao from '../../../assets/icons/Plus2.svg'
import { Link } from 'react-router-dom'

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
            <Link to={'/login/passwordCode'} style={{ textDecoration: 'none' }}>
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
