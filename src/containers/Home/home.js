import React from 'react'
import { Container, Searchbar, FormContainer, SearchButton } from './home.styled'

const API_URL = process.env.REACT_APP_API_URL
const ACCESS_KEY = process.env.REACT_APP_API_KEY


const HomeContainer = () =>  {

  const [query, setQuery] = React.useState('')

  const search = async (e) => {
    e.preventDefault()
    const url = `${API_URL}/search/users?page=1&query=${query}&client_id=${ACCESS_KEY}`
    const users = await fetch(url)

    if(users) {
      console.log(users)
    }
    console.log(query)
  }

  const changeSearch = (e) => setQuery(e.target.value)

  return (
  <Container>
    <FormContainer>
    <Searchbar value={query} onChange={changeSearch} type="text"/>
      <SearchButton onClick={search}>Search</SearchButton>
    </FormContainer>
  </Container>
)
}

export default HomeContainer

