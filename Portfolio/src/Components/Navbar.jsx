import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import pj from "../assets/4.jpg";
import resume from "../assets/AbdulRahim_resume.pdf";

const Navbar = () => {

    let[hamBurger,setHamBurger] = useState(false);

    hamBurger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';


    const links = [

        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ];

    const linkss = [

        {
          id:1,
          href:"https://www.linkedin.com/in/abdul-rahim-5761b6319/",
          link:"linkedin"
        },
        {
          id:2,
          href:"https://github.com/ARabdulrahim",
          link:"gitHub"
        },
        {
          id:3,
          href:"mailto:abdulrahim43223@gmail.com",
          link:"G-mail"
        },
        {
          id:4,
          href:resume,
          link:"resume",
          download:true
        }
    ];

  return (

    <div className='flex justify-between items-center bg-black fixed right-0 left-0 py-[8px] z-10'>
        <div className='ml-[30px] -z-10'>
            <h2 className='font-signature text-[2.1rem] text-white font-black'>Abdul Rahim</h2>
        </div>
        <div className='mr-[30px] text-[#dcdcdc] relative'>
            <ul className='hidden min-[950px]:flex gap-6'>
                {
                    links.map((link)=>{

                        return <li key={link.id} className='cursor-pointer text-[1.2rem] hover:text-white duration-200 capitalize'><Link to={link.link} smooth>{link.link}</Link></li>
                    })
                }
            </ul>
            <div className='hidden max-[949px]:inline' onClick={()=>setHamBurger(!hamBurger)}>
                {
                    hamBurger ? <FaTimes size={25}></FaTimes> : <FaBars size={25}></FaBars>
                }
            </div>

            <ul className={`hidden max-[949px]:flex flex-col py-[30px] px-[90px] items-center gap-5 absolute bg-gradient-to-t from-black to-gray-950 top-[-20px] -z-10 right-[-30px] ${hamBurger ? "translate-x-[0px]" : "translate-x-[307px]"} transition-all duration-[400ms] rounded-md`}>
                
                <img src={pj} className='rounded-full'></img>
                {
                    links.map((link)=>{
                                    
                        return <li className='text-[26px] capitalize'><Link to={link.link} smooth onClick={()=>setHamBurger(!hamBurger)}>{link.link}</Link></li>
                    })
                }
                {
                    linkss.map((link)=>{

                        return <li key={link.id} className="text-[26px] capitalize" onClick={()=>setHamBurger(false)}><a href={link.href} target='_blank'>{link.link}</a></li>
                    })
                }   

            </ul>
                
            
        </div>
        
    </div>
    

  )
}

export default Navbar

