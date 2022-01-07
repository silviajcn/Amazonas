import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  font-family: Arial;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 860px) {
    display: flex;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
`

export const ContainerForm = styled.div`
  border: 1px solid #D3DEDC;
  border-radius: 5px;
  padding: 30px;
  margin-top: 20px;
  @media screen and (max-width: 860px) {
    border: 1px solid gray;
  }
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media screen and (max-width: 860px) {
    display: flex;
  }
`

export const Labels = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
`

export const Inputs = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`

export const BtnContinue = styled.button`
  width: 309px;
  height: 30px;
  margin: 8px 0px;
  background: #FFBD35;
  border: 1px solid #000000;
  border-radius: 3px;
  &:hover {
    transition: 0.5s all ease;
    cursor: pointer;
  }
`

export const Pconditions = styled.p`
  font-size: 12px;
  color: #000000;
  width: 310px;
  height: 30px;
  margin-top: 30px;
`

export const BtnOtherAcount = styled.button`
  width: 309px;
  height: 30px;
  background: #fff;
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    transition: 0.5s all ease;
    cursor: pointer;
  }
`

export const LogoOtherAcount = styled.img`
  width: 20px;
  height: auto;
  margin-left: 15px;
  margin-right: 15px;
`

export const RegisterRedirect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Predirect = styled.p`
  font-size: 12px;
  color: gray;
`

export const BtnRegister = styled.button`
  width: 309px;
  height: 30px;
  background: #D3DEDC;
  border: 1px solid gray;
  border-radius: 3px;
  &:hover {
    background: #C9CCD5;
    transition: 0.5s all ease;
    cursor: pointer;
  }
`