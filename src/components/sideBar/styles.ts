import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 250px;
  height: 100vh;
  position: sticky;
`
export const SideBarHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 20px;
  border-bottom: 1px solid #94a3b8;
`

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 36px 24px;
  justify-content: space-between;

  height: calc(100vh - 81px);
`

export const SideBarButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  button {
    display: flex;
    border: none;
    background-color: #fff;
    gap: 8px;

    padding: 12px 0px;

    font-size: 16px;
    font-weight: 500;
    color: #94a3b8;

    vertical-align: middle;
  }
`

export const SideBarFooter = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  span:nth-child(1) {
    font-size: 6px;
    font-weight: 700;
    color: #989898;
  }

  span:nth-child(2) {
    font-size: 16px;
    font-weight: 700;
  }
`

export const Divider = styled.div`
  border-right: 1px solid #eaeaea;
`
