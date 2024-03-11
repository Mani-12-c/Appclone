import React from 'react'
import "./card.css"


const Card = (data) => {
    // console.log(data.data)
  return (
    <div className='cardcont'>
        <div className='imgcont'><img src={data.data.url}/></div>
        <div className='datacont' >
          <div className='dat'>
            <article className='cardarticle'>{data.data.title}</article>
            <div className='rating'><div className='flex'>{data.data.rating}<i class='material-icons staricn'>star</i></div></div>
          </div>
          <div className='dat'>
            <p className='des'>{data.data.des}</p>
            <p className='price'>{data.data.price}</p>
          </div>
          <div className='dat'>
            <p className='loc'>{data.data.loc}</p>
            <p>{data.data.dist}</p>
          </div>
          <div className='dat'>
            <p className='time'>{data.data.time}</p>
          </div>
        </div>
    </div>
  )
}

export default Card