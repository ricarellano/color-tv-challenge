import { useEffect, useState } from 'react'
import { Container, Header, Photos, BigImage } from './user.styled'
import { useParams } from 'react-router-dom'
import LazyImage from '../../components/LazyImage'

const API_URL = process.env.REACT_APP_API_URL
const ACCESS_KEY = process.env.REACT_APP_API_KEY


const UserContainer = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [showImage, setShowImage] = useState(-1)
  
  useEffect(() => {
    const fetchData = async ()  => {
      setLoading(true)
      const url = `${API_URL}/users/${id}/photos?client_id=${ACCESS_KEY}`
      const response = await fetch(url)
      const responseJSON = await response.json()
      console.log(responseJSON)
      setPhotos(responseJSON)
      setLoading(false)
    }
    fetchData()

  }, [])

  const showNextImage = (value) => {
    console.log(value)
    const newIndex = showImage + value
    const nextPhoto = photos[newIndex]
    if(nextPhoto) setShowImage(newIndex)
  }


  return(
    <Container>
      {
        photos.length ? (
          <>
            <Header/>
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
              <button onClick={() => setShowImage(-1)}>close</button>
            </div>
            <LazyImage
              key={photos[showImage].id}
              src={photos[showImage].urls.regular}
              alt={photos[showImage].alt_description}
              large
            />
            <div className="footer">
              <button onClick={() => showNextImage(-1)}>before</button>
              <button onClick={() => showNextImage(1)}>next</button>
            </div>
          </BigImage>

        ) : null
  
      }
    </Container>
  )
}

export default UserContainer
