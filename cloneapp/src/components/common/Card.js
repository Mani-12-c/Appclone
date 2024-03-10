import React from 'react'
import "./card.css"


const Card = (data) => {
    // console.log(data.data)
  return (
    <div className='cardcont'>
        <div className='imgcont'><img src={data.data.url}/></div>
        <div className='datacont' >
            <article className='cardarticle'>{data.data.title}</article>
            <p className='des'>{data.data.des}</p>
            <p className='loc'>{data.data.loc}</p>
            <p className='time'>{data.data.time}</p>
        </div>
    </div>
  )
}

export default Card