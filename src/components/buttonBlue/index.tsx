import { Link } from 'react-router-dom'
import { StyledButton } from './styles'

interface ButtonProps {
  text: string
  to: string | '/'
}
export function ButtonBlue(props: ButtonProps) {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <StyledButton>
        <div>{props.text}</div>
      </StyledButton>
    </Link>
  )
}
