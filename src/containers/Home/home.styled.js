import styled from 'styled-components'
import loupe from './loupe.svg'
import album from './photo-album.svg'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  background: #F1F1F1;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`

export const FormContainer = styled.form`
  display: flex;
`

export const SearchButton = styled.button`
    flex: 0;
    flex-basis: 7rem;
    border: none;
    background: url(${loupe});
    background-repeat: no-repeat;
    background-position: center;
`

export const Searchbar = styled.input`
  flex: 1;
  height: 4rem;
  width: 100%;
  padding: 0.6rem;
  margin: 0;
  font-size: 1.8rem;
  outline-color: black;
`

export const UserListContainer = styled.ul`
  display: flex;
  margin: 2rem 0;
  height: 100%;
  list-style: none;
  flex-direction: column;
`

export const UserItem = styled.li`
  display:flex;
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  img {
    flex: 0;
    flex-basis: 3rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .info {
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .info p {
    margin: 0.4rem;
    flex: 1;
    font-size: 1rem;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
  }
`

export const Message = styled.section`
  margin: 2rem 0;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  flex-direction:column;

  p {
    font-size: 1.2rem;
  }
}
`

export const StyledLink = styled(Link)`
  background: url(${album});
  width: 3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
export const LoadingContainer = styled.main`
  height: 100vh;
  background: #F1F1F1;
  margin:1rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  font-size: 1.6rem;
`
