import {
  SideBarContainer,
  SideBarContent,
  SideBarFooter,
  SideBarHeader,
  Divider,
  SideBarButtons,
  Copyright,
} from './styles'
import Logo from '../../assets/imgs/LogoFetinApp.svg'
import ArrowLeft from '../../assets/icons/arrowLeft.svg'
import HomeIcon from '../../assets/icons/home-2.svg'
import CheckIcon from '../../assets/icons/tick-square.svg'
import CupIcon from '../../assets/icons/cup.svg'
import ProfileIcon from '../../assets/icons/profile-2user.svg'
import FetinLogo from '../../assets/imgs/FetinLogo.svg'

export function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <img src={Logo} alt="" />
        <img src={ArrowLeft} alt="" />
      </SideBarHeader>
      <SideBarContent>
        <SideBarButtons>
          <button>
            <img src={HomeIcon} alt="" />
            <span>Início</span>
          </button>
          <button>
            <img src={CheckIcon} alt="" />
            <span>Etapas</span>
          </button>
          <button>
            <img src={CupIcon} alt="" />
            <span>Projetos</span>
          </button>
          <button>
            <img src={ProfileIcon} alt="" />
            <span>Usuários</span>
          </button>
          <button>
            <img src={ProfileIcon} alt="" />
            <span>Configurações</span>
          </button>
        </SideBarButtons>
        <SideBarFooter>
          <Copyright>
            <span>DESENVOLVIDO POR</span>
            <span>Digital Divas</span>
          </Copyright>
          <Divider></Divider>
          <img src={FetinLogo} alt="" />
        </SideBarFooter>
      </SideBarContent>
    </SideBarContainer>
  )
}
