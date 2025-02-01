import React, { useContext } from 'react'
import { BlogContext } from '../context/blogcontext'

const Header = () => {

  return (
    <div className='  text-center p-2 backdrop-blur-sm shadow-lg shadow-white  fixed top-0 w-full'>
      <h1 className='text-black text-3xl'>Blog Creator</h1>
    </div>
  )
}

export default Header