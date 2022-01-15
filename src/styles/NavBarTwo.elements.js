import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: #242F3E;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  margin: auto;
`

export const Menu = styled.ul`
  z-index: 50;
  display: flex;
  justify-content: start;
  align-items: start;
  list-style: none;
    left: ${({ open }) => (open ? "0" : "-110%")}; //Import
    background-color: #fff;
    position: absolute;
    top: 104px;
    width: 20vw;
    height: 99vh;
    flex-direction: column;
    transition: 0.5s all ease;
    border-right: 1px solid #D3DEDC;
`

export const MenuIdentification = styled.div`
  width: 100%;
  background: #131921;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-aling: center;
  margin-left: -32px;
  width: 273px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerIconIdent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: -40px;
  color: #fff;
`

export const Identification = styled.p`
  margin-left: 10px;
  margin-top: 16px;
`

export const MenuItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
`

export const MenuItemLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
`

export const SubTitles = styled.h4`
  width: 100%;
  color: #000000;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  padding: 2px;
`

export const Items = styled.p`
  width: 100%;
  color: #000000;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  padding: 2px;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    background-color: #D3DEDC;
    transition: 0.5s all ease;
  }
`

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  &:hover {
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 3px;
    cursor: pointer;
  }
    svg {
      fill: #fff;
    }
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`

export const LinksMenu = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 3px;
    cursor: pointer;
  }
`