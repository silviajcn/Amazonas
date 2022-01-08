import styled from "styled-components";
import { Button, Form, FormControl} from "react-bootstrap";

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

// SearchInput -----------------------------------------
export const ContainerBuscador = styled.div`
  width: 600px;
`

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const InputSearch = styled(FormControl)`
  width: 400px;
  height: 40px;
`

export const BtnSearch = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F0AD64;
  border: none;
  border-radius: 3px;
  width: 48px;
  height: 45px;
  &:hover {
    cursor: pointer;
  }
`

export const ContainerCar = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 3px;
    cursor: pointer;
  }
`

export const BtnCar = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 3px;
  height: 30px;
  background: none;
  &:hover {
    cursor: pointer;
  }
  svg {
      fill: #fff;
      font-size: 40px;
    }
`

export const LinksMenu = styled.a`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-right: 5px;
`