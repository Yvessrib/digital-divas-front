import { HeaderContainer, HeaderIcon, HeaderInfo, HeaderUser } from './style'

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
