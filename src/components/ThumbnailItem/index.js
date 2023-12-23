// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageList, updateImageDetails, imageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImageList
  const clickImage = () => {
    updateImageDetails(id)
  }
  const classStyle = imageId === id ? 'img-style-click' : ''

  return (
    <li className="list-style">
      <button onClick={clickImage} type="button" className="button-style">
        <img
          className={`img-style ${classStyle}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
