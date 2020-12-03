import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  background: #F1F1F1;
  margin:2rem;
`

export const Header = styled.section`
  display: flex;
  border-bottom: 1px solid black;

  img {
    flex:0;
    flex-basis: 4rem;
  }

  .info {
    flex: 1;
    flex-direction:row;
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


  .footer {
    width: 100%;
    display: flex;
    margin: 0.6rem;
    justify-content: space-evenly;
  }

`

