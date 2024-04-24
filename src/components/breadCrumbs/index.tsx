import { BreadcrumbsContainer } from './styles'

interface BreadcrumbProps {
  text: string
}
export function Breadcrumbs(props: BreadcrumbProps) {
  return <BreadcrumbsContainer>{props.text}</BreadcrumbsContainer>
}
