import { FormFooter, InputContainer, LoginHeader } from './styles'
import iconBotao from '../../assets/icons/Plus2.svg'
import { Link } from 'react-router-dom'

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
            <Link to={'/admin/projectsList'} style={{ textDecoration: 'none' }}>
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
