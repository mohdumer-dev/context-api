import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Blog from './Blog'
import Footer from './Footer'
import { BlogContext } from '../context/blogcontext'

const Data = () => {

    const { FetchData,blog } = useContext(BlogContext)

    useEffect(()=>{
        FetchData()
        
    },[])
    

    return (
        <div   className='relative'>
            <Header />
            <Blog />
            <Footer />
        </div>
    )
}

export default Data