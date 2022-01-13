import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 340px 340px;
  column-gap: 20px;
  row-gap: 10px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  margin-top: -320px;
  z-index: 20;
  position: absolute;
`

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #fff;
  width: 300px;
  height: 340px;
  margin-left: 40px;
`

export const ImgProduct = styled.img`
  width: 260px;
  height: 260px;
  margin-top: 10px;
  margin-left: 20px;
`

export const TitleProduct = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  margin-top: 10px;
  margin-left: 20px;
`

export const LinksBlue = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #0E7184;
  margin-top: 10px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`