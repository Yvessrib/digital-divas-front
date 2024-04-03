import { HeaderContainer, HeaderIcon, HeaderInfo, HeaderUser } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderInfo>
        <HeaderUser>
          <span>Bárbara Barbieri</span>
          <span>Adminstradora</span>
        </HeaderUser>
        <HeaderIcon>
          <span>BB</span>
        </HeaderIcon>
      </HeaderInfo>
    </HeaderContainer>
  )
}
