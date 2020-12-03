import React from "react"
import PropTypes from "prop-types"
import LazyLoad from "react-lazyload"
import { ImageWrapper, Placeholder, StyledImage} from './LazyImage.styled'



const LazyImage = ({ src, alt,large }) => {
  const refPlaceholder = React.useRef()

  const removePlaceholder = () => {
    refPlaceholder.current.remove()
  }

  return (
    <ImageWrapper large={large}>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default LazyImage
