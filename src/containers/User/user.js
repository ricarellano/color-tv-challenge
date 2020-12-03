import { useEffect, useState } from 'react'
import { Container, Header, Photos, BigImage, StyledLink, BeforeButton,
  NextButton, CloseButton, ErrorContainer } from './user.styled'
import { useParams } from 'react-router-dom'
import LazyImage from '../../components/LazyImage'
import { useSelector } from 'react-redux'
import { getUser } from '../../features/user/userSlice'
import { Link } from 'react-router-dom'



const API_URL = process.env.REACT_APP_API_URL
const ACCESS_KEY = process.env.REACT_APP_API_KEY


const UserContainer = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [showImage, setShowImage] = useState(-1)
  const [error, setError] = useState()

  const selectedUser = useSelector(getUser)
  
  useEffect(() => {
    const fetchData = async ()  => {
      setLoading(true)
      const url = `${API_URL}/users/${id}/photos?client_id=${ACCESS_KEY}`
      const response = await fetch(url)
      const responseJSON = await response.json()
      if(responseJSON.length) {
        setPhotos(responseJSON)
      }else {
        setError(1)
      }
      setLoading(false)
    }
    fetchData()

  }, [id])

  const showNextImage = (value) => {
    const newIndex = showImage + value
    const nextPhoto = photos[newIndex]
    if(nextPhoto) setShowImage(newIndex)
  }


  return(
    <Container>
      {
        error || selectedUser === null ? (
          <ErrorContainer>
            Error happens!
            <p>Please <Link to="/">return</Link> with another user</p>
          </ErrorContainer>
        )
        : <>
      {
        photos.length ? (
          <>
            <Header>
                <StyledLink to="/" />
              <div className="info">
                <h2>{selectedUser.name}</h2>
              </div>
              <p>{selectedUser.bio}</p>
            </Header>
            <Photos>
              {
                photos.map((photo,index) => (
                  <div
                    onClick={() => setShowImage(index)}
                  >
                  <LazyImage
                    key={photo.id}
                    src={photo.urls.regular}
                    alt={photo.alt_description}
                  />
                  </div>
                ))
              }
            </Photos>
          </>
        )
        : null
      }
      {
        showImage > -1 ? (
          <BigImage>
            <div className="header">
              <CloseButton onClick={() => setShowImage(-1)}/>
            </div>
            <LazyImage
              key={photos[showImage].id}
              src={photos[showImage].urls.regular}
              alt={photos[showImage].alt_description}
              large
            />
            <div className="footer">
              <BeforeButton onClick={() => showNextImage(-1)}/>
              <NextButton onClick={() => showNextImage(1)}/>
            </div>
          </BigImage>

        ) : null
  
      }
        </>
      }
    </Container>
  )
}

export default UserContainer
