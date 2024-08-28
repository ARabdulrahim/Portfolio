import React from 'react'
import img1 from "../assets/html.png";
import img2 from "../assets/css.png";
import img3 from "../assets/javascript.png";
import img4 from "../assets/react.png";
import img5 from "../assets/tailwind.png";
import img6 from "../assets/node.png";

const Experience = () => {

        const tech = [

            {
                id:1,
                src:img1,
                title:"Html",
                style:"shadow-orange-500 shadow-md"
            },
            {
                id:2,
                src:img2,
                title:"CSS",
                style:"shadow-blue-500 shadow-md"
            },
            {
                id:3,
                src:img3,
                title:"Javascript",
                style:"shadow-yellow-500 shadow-md"
            },
            {
                id:4,
                src:img4,
                title:"React",
                style:"shadow-blue-600 shadow-md"
            },
            {
                id:5,
                src:img5,
                title:"Tailwind",
                style:"shadow-sky-400 shadow-md"
            },
            {
                id:6,
                src:img6,
                title:"Express",
                style:"shadow-green-500 shadow-md"
            },
        ]

  return (

        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black pt-[18%] min-[810px]:pt-[10%]'>
            <div className='w-[78%] m-auto text-white'>
                <div>
                    <p className='text-[2.5rem] border-b-2 border-gray-500 w-max leading-[40px]'>Experience</p>
                    <p className='text-[1.1rem] mt-[20px] mb-[50px]'>These are the technologies I've worked with</p>
                </div>
                <div className='grid grid-cols-1 gap-[3.5rem] min-[550px]:grid-cols-3 min-[550px]:gap-8'>

                    {
                        tech.map((tech)=>{

                            return <div key={tech.id} id="div" className={`flex flex-col items-center py-[15px] ${tech.style}`}>
                                        <img src={tech.src} className='w-[5rem]'></img>
                                        <p className='text-[1.1rem] pt-[15px]'>{tech.title}</p>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default Experience