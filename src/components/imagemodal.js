import React from 'react'

const Model = ({selectImage , setSelectedImage})  => {

    const handleClick = (e) => {
        setSelectedImage(null)
    }
    return (
        <div className = 'img-backdrop' onClick = {handleClick}>
            <img src = {selectImage} alt = 'big image' />
        </div>
    )
}
export default Model