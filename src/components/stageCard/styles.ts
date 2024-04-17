import styled from 'styled-components'

export const StageCardContent = styled.div`
  padding: 24px;
  border: 1px solid ${(props) => props.theme.neutral_10};
  border-radius: 12px;
`

export const StageCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StageCardDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  span {
    color: ${(props) => props.theme.neutral_40};
    font-size: 12px;
    font-weight: bold;
  }
`

export const StageTag = styled.span`
  padding: 8px;
  background-color: ${(props) => props.theme.blue_05};
  border-radius: 10px;

  color: ${(props) => props.theme.blue_70};
  font-size: 12px;
  font-weight: bold;
`

export const StageCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span:nth-child(1) {
    color: ${(props) => props.theme.blue_100};
    font-size: 20px;
    font-weight: bold;
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.neutral_60};
    font-size: 12px;
    font-weight: 500;
  }
`
