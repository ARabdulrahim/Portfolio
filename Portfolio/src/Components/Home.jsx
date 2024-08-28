import React from 'react'
import hi from "../assets/4.jpg";
import {BsArrowRight} from "react-icons/bs";
import { Link } from 'react-scroll';

const Home = () => {

  return (
    
    <div name="home" className='h-auto bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-evenly pt-[6rem] gap-[50px] min-[810px]:flex-row min-[810px]:h-screen min-[810px]:pt-5'>
        <div className='w-[85%] min-[810px]:w-[40%]'>
            <h2 className='text-white text-5xl min-[810px]:text-[4.5rem] min-[810px]:leading-[65px]'>I'm a Full Stack Developer</h2>
            <p className='text-[#dcdcdc] py-5 text-[1.2rem]'>I love to work on web application using technologies like React,Tailwind,Express and MongoDb</p>
            <div className='text-white'>

                    <Link to="portfolio" smooth className='bg-[#696969] flex items-center px-[15px] py-[5px] gap-[3px] rounded text-[1.1rem] cursor-pointer w-[fit-content]' id='btn'> Portfolio
                            <span><BsArrowRight className='w-[20px] h-[20px]'></BsArrowRight></span>
                    </Link>
            </div>
        </div>
        <div className='border-[2px] image border-solid rounded-2xl border-[#a9a9a9]' id='dimg'>
            <img src={hi} className='rounded-5xl img w-[300px] min-[810px]:w-[350px]' id='img'></img>
        </div>
    </div>

  )
}

export default Home