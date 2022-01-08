import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 64px;
  background-color: #131921;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    margin-left: 0px;
  }
`

export const ImgLogo = styled.img`
  width: 110px;
  height: auto;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    width: 120px;
  }
`