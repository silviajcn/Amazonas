import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #242F3E;
  color: #fff;
  @media screen and (max-width: 860px) {
    display: flex;
  }
`

export const FirstContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`

export const Containers = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
`

export const Title = styled.h5`
  font-size: 12px;
  margin: 0px;
`

export const Items = styled.p`
  font-size: 11px;
  margin-bottom: 3px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
`

export const Credits = styled.p`
  font-size: 11px;
  margin-bottom: 20px;
`