import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

export const ContainerTitle = styled.div`
  border-bottom: 1px solid #D3DEDC;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

export const Title = styled.h2`
  margin-left: 150px;
  font-weight: 800;
`

export const SecondTitle = styled.h3`
  margin-left: 150px;
`

export const ContainerBtns = styled.div`
  display: grid;
  grid-template-columns: 340px 340px 340px;
  grid-template-rows: 150px 150px 150px;
  column-gap: 20px;
  row-gap: 15px;
  margin-left: 150px;
  &:hover {
    cursor: pointer;
  }
  h4 {
    &:hover {
      color: orange;
    }
  }
`

export const Btns = styled.div`
  border: 1px solid #D3DEDC;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: start;
`

export const ImgBtn = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 10px;
`

export const TextItems = styled.p`
  font-size: 15px;
  margin-right: 15px;
`

export const ContainerInput = styled.div`
  border-top: 1px solid #D3DEDC;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 100%;
  height: auto;
`

export const ContainerTextInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-left: 150px;
`

export const TitleInput = styled.h3`
  margin-right: 20px;
`

export const InputContainer = styled.div`
  border: 1px solid #000000;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 800px;
  height: 30px;
  margin-left: 150px;
`

export const ContainerIcon = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  border: none;
  width: 100%;
  height: auto;
`
