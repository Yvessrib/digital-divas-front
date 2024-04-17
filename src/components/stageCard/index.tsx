import {
  StageCardBody,
  StageCardContent,
  StageCardDate,
  StageCardHeader,
  StageTag,
} from './styles'

export function StageCard() {
  return (
    <StageCardContent>
      <StageCardHeader>
        <StageCardDate>
          <img src="" alt="" />
          <span>19-20 de Março de 2024</span>
        </StageCardDate>
        <StageTag>Realizado</StageTag>
      </StageCardHeader>
      <StageCardBody>
        <span>Banca de Ideação</span>
        <span>
          Validação da idea com especialistas e/ou usuário e entrega do mapa do
          sucesso
        </span>
      </StageCardBody>
    </StageCardContent>
  )
}
