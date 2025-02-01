import React, { useContext } from 'react'
import { BlogContext } from '../context/blogcontext'
import '../index.css'
import Spinner from './Spinner'

const Blog = () => {
  const { loading, blog } = useContext(BlogContext)

  return (
    <div>
      {
        loading?<Spinner/>:(blog.length>=0 ? <p>No Blog Found</p>:<p>Blog found</p>)
      }
    </div>
  )
}

export default Blog