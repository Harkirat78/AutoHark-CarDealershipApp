// Importing the Image component from the next.js library

"use client"; //component client side

import Image from 'next/image';
import CustomButton from './CustomButton'; 

// Defining a functional component named Hero
const Hero = () => {
    
    const handleScroll = () => {

    }

  return (
    // Returning a div with the text 'Hero'
    <div className = "hero">
        <div className="flex-1 pt-36 padding-x">
        
        <h1 className="hero__title">
            <span className="text-gold">Discover, Drive, Delight:</span> Your Journey Begins with AutoHark!
        </h1>
            <p className="hero__subtitle">
            Revolutionize your car adventure with our seamless booking journey.
            </p>
            
            <CustomButton
                title="Explore"
                containerStyles="bg-ecab55
                text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/mercedes-benz-gle-class-my21-index-1.webp" alt="hero" 
                fill className="object-contain"/>
                </div>
                <div className="hero__image-overlay">

                </div>
            
        </div>
    </div>
  )
}

// Exporting the Hero component as the default export of this module
export default Hero