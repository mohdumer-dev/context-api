import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Blog from './Blog'
import Footer from './Footer'
import { BlogContext } from '../context/blogcontext'

const Data = () => {

    const { FetchData } = useContext(BlogContext)

    useEffect(()=>{
        FetchData()
        console.log("Data fetching called")
    },[])

    return (
        <div className='w-full h-screen '>
            <Header />
            <Blog />
            <Footer />
        </div>
    )
}

export default Data