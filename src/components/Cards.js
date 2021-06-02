import React from 'react'
import './Cards.css'
import CardItem from './CardItem.js'
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src={img2}
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/services'
                        />
                        <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src={img2}
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/services'
                        />
                        <CardItem 
                        src={img2}
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Cards
