import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[30rem]  bg-blue-300 flex-row flex justify-between items-center'>
        <div className="banner_text w-2/5 text-left pl-6">
            <h1 className='text-5xl font-bold text-white text-left  '>Welcome to Code Hustlers</h1>
            <p className='text-xl text-white text-left pt-5'>We are a team of developers who are passionate about creating amazing web applications</p>

            <button type="button" className='bg-blue-600 p-2 font-bold rounded text-[15px] mt-3 text-white'>
                Connect To Mentor
            </button>
        </div>
        <div className="banner_img w-1/2 text-left h-full ">
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="banner" className="w-full h-full object-cover" loading='lazy' />
        </div>
      
    </div>
  )
}

export default Banner
