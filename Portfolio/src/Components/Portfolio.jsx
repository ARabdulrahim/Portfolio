import React from 'react'
import img1 from "../assets/weather-app.png";
import img2 from "../assets/images (1).jpeg";
import img3 from "../assets/simon-says.png";

const Portfolio = () => {

    const portfolios = [

        {
            id:1,
            src:img1,
            href:"https://abdulrahimweatherapp.vercel.app/",
            name:'Weather App',
            href1:"https://github.com/ARabdulrahim/abdulrahim_weatherapp"
        },
        {
            id:2,
            src:img2,
            href:"https://abdul-rahim-password-generator.vercel.app/",
            name:"Password Generator",
            href1:"https://github.com/ARabdulrahim/AbdulRahimPasswordGenerator"
        },
        {
            id:3,
            src:img3,
            href:"https://abdulrahim-simon-says-game.vercel.app/",
            name:"Simon-Says Game",
            href1:"https://github.com/ARabdulrahim/abdulrahim_simon_says_game"
        },
        {
            id:4,
            src:img2,
            href:"https://abdul-rahim-password-generator.vercel.app/",
            name:"Password Generator",
            href1:"https://github.com/ARabdulrahim/AbdulRahimPasswordGenerator"
        },
        {
            id:5,
            src:img1,
            href:"https://abdulrahimweatherapp.vercel.app/",
            name:'Weather App',
            href1:"https://github.com/ARabdulrahim/abdulrahim_weatherapp"
        },
        {
            id:6,
            src:img3,
            href:"https://abdulrahim-simon-says-game.vercel.app/",
            name:"Simon-Says-Game",
            href1:"https://github.com/ARabdulrahim/abdulrahim_simon_says_game"
        },
    ]

  return (

    <div name="portfolio" className='bg-gradient-to-b from-[#000000fc] to-gray-800 text-white pt-[10%]'>
        <div className='w-[78%] m-auto'>
            <div>
                <p className='text-[2.5rem] border-b-2 border-gray-500 w-max leading-[40px]'>Portfolio</p>
                <p className='text-[1.1rem] mt-[20px] mb-[50px]'>Checkout some of my work right here</p>
            </div>

            <div className='flex justify-between flex-wrap flex-col gap-[4rem] min-[700px]:flex-row min-[700px]:gap-10'>

                {
                    portfolios.map((port)=>{

                        return <div key={port.id} className='w-auto shadow-md shadow-gray-600 rounded-lg min-[700px]:w-[30%]' id='dimg'>
                                    <img src={port.src} className="h-[170px] w-[-webkit-fill-available] rounded-lg" id='img'></img>
                                    <div className='flex justify-around mt-[20px]'>
                                        <button className='text-[1.1rem]'><a href={port.href} target="_blank">Demo</a></button>
                                        <button className='text-[1.1rem]'><a href={port.href1} target="_blank">Code</a></button>
                                    </div>
                                    <p className='text-center text-[1.1rem] my-[15px]'>{port.name}</p>
                                </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio