import React from 'react'
import "./Diningout.css"
import Card from '../common/Card'
import data from './data'

const items = [
    "https://b.zmtcdn.com/data/collections/a4eab277c70b4c95623183d2cb5467cb_1685354194.jpg",
    "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1685353464.jpg",
    "https://b.zmtcdn.com/data/collections/47cf396bdd106cd962b509afc175a12b_1685361648.png",
    "https://b.zmtcdn.com/data/collections/3157c14387f705410a2698c0e45a9e82_1685350560.png"
]




const Diningout = () => {
    return (
        <section>
            <section className='maincontainer'>
                <div className='max-width '>
                    <h2><article className='artcle'>Collections</article></h2>
                    <h6>Explore curated lists of top restaurants, cafes, pubs, and bars in Visakhapatnam, based on trends</h6>
                    <div className='cardscontainer flex-items'>
                        {items.map((item, index) => (
                            <div key={index} className='cardcontainer'>
                                <div className='imgcontainer'>
                                    <img src={item} className='itemimg' alt={`Image ${index}`} />
                                </div>
                                <div className='contents'>
                                    <div className='c1'><span>9 Local Favourite places</span></div>
                                    <div className='c2'><span>9 Places<i class="material-icons">arrow_right</i></span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
                <div className='max-width filtermenu'>
                    <div className='cont'><i class="material-icons">tune</i> Filter</div>
                    <div className='cont'><img src='https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png' className='goldimg'/>Gold</div>
                    <div className='cont'>Rating: 4.0+</div>
                    <div className='cont'>Serves Alcohol</div>
                    <div className='cont'>Outdoor Seating</div>
                    <div className='cont'>Open Now</div>
                </div>
                <div className='max-width'>
                    <div className='offerimg'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"/>
                    </div>
                    
                </div>

                <div className='max-width'>
                    <div>
                        <article className='artcle'>Trending dining restaurants in Visakhapatnam</article>
                    </div>

                    <div className='max-width flex-items menu-items'>
                        {  
                            data.map((data)=>{
                                return <Card data={data}/>
                            })
                        }
                        
                    </div>
                </div>
            
        </section>
    )
}

export default Diningout;
