import styled from 'styled-components'
import { Link } from 'react-router-dom'
import previous from './previous.svg'
import close from './cancel.svg'

export const Container = styled.main`
  height: 100vh;
  background: #F1F1F1;
  margin:1rem;
`

export const StyledLink = styled(Link)`
  background: url(${previous});
  width:3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const CloseButton = styled.button`
  background: url(${close});
  width:3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
`
export const BeforeButton = styled.button`
  background: url(${previous});
  width:3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
`
export const NextButton = styled.button`
  background: url(${previous});
  width:3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  transform: rotate(180deg);
`

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;

  img {
    flex:0;
    flex-basis: 4rem;
  }

  .info {
    flex: 1;
    flex-direction:row;
    font-size: 1.6rem;
  }
  
  p {
    margin-top: 0.6rem;
    font-size: 1rem;
  }

`

export const Photos = styled.section`
  display: grid;
  padding: 16px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`
export const Photo = styled.img`
  height: 16rem;
  margin: 0.4rem;
`

export const BigImage = styled.section`
  background: rgba(0,0,0, 0.6);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    width: 100%;
    display: flex;
    margin: 0.6rem;
    justify-content: flex-end;
    background-color: #FFFF;
    padding: 0.4rem;
  }

  .footer {
    width: 100%;
    display: flex;
    margin: 0.6rem;
    justify-content: space-evenly;
    background-color: #FFFF;
    padding: 0.4rem;
  }

`

