import React from 'react'

const Contact = () => {
  return (

    <div name="contact" className='bg-gradient-to-b from-black to-gray-800 pt-[18%] pb-[18px] min-[810px]:pt-[10%] min-[810px]:pb-[12px]'>
        <div className='w-[78%] m-auto text-white'>
            <div>
                <p className='text-[2.5rem] border-b-2 border-gray-500 w-max leading-[40px]'>Contact</p>
                <p className='text-[1.1rem] mt-[20px] mb-[50px]'>Submit the form below to get touch with me</p>
            </div>

            <div>
                <form action='https://getform.io/f/ajjexnea' method='POST' className='w-auto m-auto min-[550px]:w-[40%]'>

                    <input type="text" name='name' placeholder='Enter your name' autoComplete='off' className='bg-transparent border-2 rounded-md text-white outline-none p-2 w-[-webkit-fill-available] my-[12px]'></input>
                    <input type="email" name='email' placeholder='Enter your mail' autoComplete='off' className='bg-transparent border-2 rounded-md text-white outline-none p-2 w-[-webkit-fill-available] my-[12px]'></input>
                    <textarea name='message' rows='10' placeholder='Enter your message' className='bg-transparent border-2 rounded-md text-white outline-none p-2 w-[-webkit-fill-available] resize-none my-[12px]'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 flex m-auto rounded text-[1.1rem]' id='btn'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact