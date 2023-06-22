import './index.css'

const ImageItem = props => {
  const {eachImage, onChangeImage} = props
  const {imageUrl, thumbnailUrl} = eachImage
  const changeImage = () => {
    onChangeImage(imageUrl)
  }
  return (
    <li className="list-container">
      <button type="button" className="image-button">
        <img
          src={thumbnailUrl}
          className="image"
          alt="thumbnail"
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ImageItem
