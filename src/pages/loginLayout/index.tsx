import { ReactNode } from 'react'

import digitalLogo from '../../assets/imgs/DigitalDivasLogo.svg'
import loginFetinLogo from '../../assets/imgs/logoLogin.svg'
import { LoginContainer, LoginContent, LoginFooter, LoginImg } from './styles'

interface LayoutProps {
  children?: ReactNode
}

export function LoginLayout({ children }: LayoutProps) {
  return (
    <LoginContainer>
      <LoginContent>
        <div>
          <img src={loginFetinLogo} alt="" />
          {children}
        </div>
        <LoginFooter>
          <img src={digitalLogo} alt="" />
        </LoginFooter>
      </LoginContent>
      <LoginImg></LoginImg>
    </LoginContainer>
  )
}
