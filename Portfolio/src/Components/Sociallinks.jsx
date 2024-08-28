import React from 'react'
import {BsDownload, BsGithub} from "react-icons/bs";
import {AiFillLinkedin,AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill,BsLinkedin} from "react-icons/bs";
import resume from "../assets/AbdulRahim_resume.pdf";

const Sociallinks = () => {

  const links = [

      {
        id:1,
        child:(

          <>Linkedin<AiFillLinkedin size={25}></AiFillLinkedin></>
          
        ),
        href:"https://www.linkedin.com/in/abdul-rahim-5761b6319/",
        style:"rounded-tr-md hover:rounded"
      },
      {
        id:2,
        child:(

          <>GitHub<BsGithub size={25}></BsGithub></>
          
        ),
        href:"https://github.com/ARabdulrahim",
        style:"hover:rounded"
      },
      {
        id:3,
        child:(

          <>Mail<AiOutlineMail size={25}></AiOutlineMail></>
          
        ),
        href:"mailto:abdulrahim43223@gmail.com",
        style:"hover:rounded"
      },
      {
        id:4,
        child:(

          <>Resume<BsFillPersonLinesFill size={25}></BsFillPersonLinesFill></>
          
        ),
        href:resume,
        style:"rounded-br-md hover:rounded",
        download:true
      }
  ]
    
  return (

    <div name="sociallinks" className='fixed top-[37%] text-white'>
        <ul className='hidden min-[950px]:inline'>
            {
              links.map((link)=>{

                 return <li key={link.id} className={'relative left-[-76px] bg-[#696969] pr-[10px] pl-[3px] py-[10px] hover:left-0 transition-[all] duration-300'+" "+link.style}>
                  <a  href={link.href}  className={"flex items-center justify-between text-[1.2rem] gap-[10px]"+" "+link.style} target='_blank'>{link.child}</a>
                  </li>
              })
            }            
        </ul>
    </div>
  )
}

export default Sociallinks