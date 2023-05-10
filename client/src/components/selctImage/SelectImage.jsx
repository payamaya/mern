import { useState, useEffect } from 'react'
import './selectImage.css'
const SelectImage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])
  return (
    <div className='select-image'>
      <label htmlFor='avatar'>Choose a profile picture:</label>
      <input
        accept='image/*'
        type='file'
        id='select-image'
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      {/* can add progress.load */}
      {imageUrl && selectedImage && (
        <div>
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height='100px' />
        </div>
      )}
    </div>
  )
}
export default SelectImage
