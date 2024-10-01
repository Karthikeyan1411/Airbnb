import React from 'react'

const Card = (props) => {

  let badgeText;
  
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img 
            // if the images is in public folder, we can use like this by props
            src = {`/images/${props.coverImg}`}
            alt=""
            className='card--img' 
        />
        <div className='card-stats'>
            <img 
                // if we not use props, then we give location like this if the image folder in public folder
                src = "/images/Star.png"
                alt="star" 
                className='card--star' 
            />
            <span >{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount}) &bull; </span>
            <span className='gray'>{props.location}</span>
        </div>
        <p className='card--title'>{props.title}</p>
        <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card