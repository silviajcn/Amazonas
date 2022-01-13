import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 35px;
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid #D3DEDC;
`

export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 18px;
  flex-direction: row;
  margin-left: 30px;
`

export const LinksMenu = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
  margin-right: 32px;
  &:hover {
    color: orange;
    cursor: pointer;
  }
`