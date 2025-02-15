import React from 'react'

const About = () => {
  return (

    <div name="about" className='bg-gradient-to-b from-gray-800 to-black text-white pt-[100px]'>
        <div className='w-[78%] flex flex-col justify-center m-auto'>
            <div className='mb-[50px]'> 
                <p className='text-[2.5rem] border-b-2 border-gray-500 w-max leading-[40px]'>About</p>
            </div>

            <p className='text-[1.28rem]'>
            I am a full stack developer and loves to make beautifull website's using current trending technology's like React,Tailwind,Express and MongoDb. I have a good knowledge of Backend development and I always try to explore new technology's that will help me to develop a better output in less time.
            </p>

            <br></br>

            <p className='text-[1.28rem]'>
            Currently I am pursuing B.tech from SIRTE in Bhopal and this is my Portfolio website which is created using React and Tailwind, which include some of my project's and little description about me. Initially when I was in first year I did'n know anything about coding but then when I came in second semester there was one subject name Basic Computer Engineering,that subject developed my interest in coding and different programming languages,so after that my coding journey begun.
            </p>
        </div>
    </div>
  )
}

export default About