import React from 'react'

const ShowImg = ({ img, type }) => {

    return (
        <div className="divimgshow">
            {type ? <img src={img} width="100%" height="100%" alt="imagefile"/> :""}
           
        </div>
    )
}

export default ShowImg
