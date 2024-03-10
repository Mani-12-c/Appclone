import React from 'react'
import "./tabOptions.css"


const TabOptions = () => {
  return (
    <section className='max-width pos'>
        <div className='tabOptions'>
            <div className='tcontainer dout flex-items'>
                <div className='outerbox'>
                    <div className='dout-img defsize'>
                        <img src='https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp'/>
                    </div>
                </div>
                <h2>Dining Out</h2>
                
            </div>
            <div className='tcontainer del flex-items'>
                <div  className='outerbox'>
                    <div className='del-img defsize'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"/>
                    </div>
                </div>
                <h2>Delivery</h2>
            </div>
            <div className='tcontainer nyt flex-items'>
                <div  className='outerbox'>
                    <div className='nyt-img defsize'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"/>
                    </div>
                </div>
                <h2>Nightlife</h2>
            </div>
        </div>
        
    </section>
  )
}

export default TabOptions