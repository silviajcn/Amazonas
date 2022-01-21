import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100vw;
  height: auto;
  background: rgba(245, 245, 245, 0.769);
`

export const ContainerBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 0px;
`

export const PBack = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

export const ContainerSecond = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`

export const ContainerCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0px 30px 30px 30px;
  border-bottom: 2px solid #D3DEDC;
  width: 1000px;
  height: auto;
  background: #fff;
`

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  margin: 10px 0px 20px 15px;
  border-bottom: 2px solid #D3DEDC;
  width: 950px;
  height: auto;
  background: #fff;
`

export const ContainerTitleCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 15px;
`

export const MarginTitlePrice = styled.p`
  margin-left: 600px;
`


//PRODUCTS IN CART
export const ContainerProductInCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0px 170px 30px 20px;
  border-bottom: 2px solid #D3DEDC;
  width: 950px;
  height: auto;
`

export const RemoveAllLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #0E7184;
  cursor: pointer;
`

export const BtnShowDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background: none;
  border: none;
  text-align: start;
`

export const ContainerImgProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const ImgProduct = styled.img`
  width: 200px;
`

export const ContainerSecondary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 30px;
  margin-bottom: 20px;
  width: 550px;
`

export const TitleProduct = styled.h2`
  font-size: 16px;
`

export const ContainerTres = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`
export const ContainerBtnsItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  width: 600px;
`

export const BtnAgregarMas = styled.button`
  background: none;
  border: solid gray 1px;
  border-radius: 3px;
  padding: 3px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerBtnMas = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PUno = styled.p`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-left: 5px;
  font-size: 12px;
`

export const PDos = styled.p`
  margin-left: 5px;
  font-size: 18px;
`

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  margin-left: 60px;
  margin-top: -80px;
`

export const ContainerSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0px 5px 20px 5px;
  border-bottom: 2px solid #D3DEDC;
  width: 250px;
  height: 250px;
  background: #fff;
`

export const TitleSubTotal = styled.h2`
  font-size: 18px;
  margin: 0px 0px 0px 20px;
  width: 180px;
`

export const ContainerEnvioGratis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  margin: 20px 0px 0px 20px;
  color: green;
  font-size: 12px;
  width: 200px;
  svg {
    font-size: 20px;
  }
`

export const EnvioGratisP = styled.p`
  margin-left: 10px;
`

export const BtnComprar = styled.button`
  margin: 30px 0px 0px 20px;
  border: 1px solid #000000;
  background: #F0AD64;
  border-radius: 3px;
  padding: 3px 40px;
`

export const ImgLogo = styled.img`
  width: 150px;
  margin: 80px 40px 80px 50px;
`