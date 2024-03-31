import { styled } from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`

export const ProjectsContainer = styled.div`
  margin: 48px;
`

export const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-size: 12px;
    font-weight: 500;
    color: #94a3b8;
    margin-bottom: 20px;
  }

  span:nth-child(2) {
    font-size: 40px;
    color: #1e293b;
    font-weight: bold;
  }
`
export const ProjectFormContainer = styled.div`
  margin-top: 48px;

  form {
    label {
      font-size: 14px;
      font-weight: bold;
      color: #1e293b;
    }
  }
`

export const FormsTitle = styled.span`
  margin: 48px 0px 0px 0px;
  font-size: 24px;
  font-weight: bold;
  color: #1e293b;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 12px 0px;
`

interface WidthProps {
  width?: string
}

export const StyledInput = styled.input<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 12px 16px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin: 10px 0px 5px 0px;
`
export const GeneralInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 20px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #94a3b8;
    margin-bottom: 20px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 16px;
`
export const Divider2 = styled.div`
  width: 100%;
  height: 1px;
  border: 1px dashed #dcdcdc;
`
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 30px;
  align-items: center;

  button {
    border-radius: 100px;
    border: 1px solid;
    background-color: #fff;
    color: #1e293b;
    border-color: #eaeaea;

    font-size: 14px;
    font-weight: bold;
    text-wrap: nowrap;

    div {
      display: flex;
      gap: 8px;
      padding: 16px 40px;
    }
  }
`
export const FormsFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 48px;

  button {
    border-radius: 100px;
    border: 1px solid;
    background-color: #fff;
    color: #1e293b;
    border-color: #eaeaea;

    font-size: 14px;
    font-weight: bold;
    text-wrap: nowrap;

    div {
      display: flex;
      gap: 8px;
      padding: 16px 20px;
    }
  }

  button:nth-child(1) {
    background-color: #fff;
    color: #1e293b;
    border-color: #eaeaea;
  }

  button:nth-child(2) {
    background-color: #306bff;
    color: #fff;
    border-color: #306bff;
  }
`
