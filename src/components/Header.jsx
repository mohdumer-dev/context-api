import React, { useContext } from 'react'
import { BlogContext } from '../context/blogcontext'

const Header = () => {

  return (
    <div className='bg-red-300  text-center p-2'>
      <h1 className='text-black text-3xl'>Blog Creator</h1>
    </div>
  )
}

export default Header