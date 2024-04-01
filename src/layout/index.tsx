import { ReactNode } from 'react'
import { Header } from '../components/header'
import { SideBar } from '../components/sideBar'
import { ContentContainer, PageContainer } from './styles'

interface LayouProps {
  children?: ReactNode
}

export function Layout({ children }: LayouProps) {
  return (
    <PageContainer>
      <SideBar></SideBar>
      <ContentContainer>
        <Header />
        {children}
      </ContentContainer>
    </PageContainer>
  )
}
