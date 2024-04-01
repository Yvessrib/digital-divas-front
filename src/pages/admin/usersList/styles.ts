import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ProjectsContainer = styled.div`
  margin: 48px;
`

export const Breadcrumbs = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #94a3b8;
  margin-bottom: 20px;
`

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  span {
    font-size: 40px;
    color: #1e293b;
    font-weight: bold;
  }
`

export const ProjectsHeaderButtons = styled.div`
  display: flex;
  gap: 16px;

  button {
    border-radius: 100px;
    border: 1px solid;

    font-size: 14px;
    font-weight: bold;

    cursor: pointer;
    text-decoration: none;

    div {
      display: flex;
      gap: 8px;
      margin: 0px 22px;
    }
  }

  button:nth-child(1) {
    background-color: #fff;
    color: #1e293b;
    border-color: #eaeaea;
  }

  button:nth-child(2) {
    background-color: #306bff;
    color: #ffffff;
    border-color: #306bff;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`

export const ListHead = styled.div`
  display: flex;
  flex-direction: row;

  button {
    background-color: #fff;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 12px 24px;
    z-index: 1;
    border-bottom: 1px solid #989898;
  }

  button:nth-child(1) {
    border-bottom: 1px solid #0159ea;
    color: #1e293b;
  }
`
export const Divider = styled.div`
  position: relative;
  border-bottom: 1px solid #989898;
  top: -1px;
  z-index: 0;
`

export const ListContent = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    padding: 10px;

    th {
      font-size: 12px;
      font-weight: bold;
      color: #1e293b;
      text-align: left;
      padding: 12px 16px;
    }

    tr {
      border-bottom: 1px solid #dddddd;
      padding: 12px 6px;
    }

    td {
      font-size: 12px;
      color: #000;
      padding: 12px 16px;
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 10px 0px;
  border-bottom: 1px solid #dddddd;
`
