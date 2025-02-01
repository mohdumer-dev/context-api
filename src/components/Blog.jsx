import React, { useContext } from 'react'
import { BlogContext } from '../context/blogcontext'
import '../index.css'
import Spinner from './Spinner'

const Blog = () => {
  const { loading, blog } = useContext(BlogContext)
  console.log(blog)

  return (
    <div className='sm:w-3/5 w-4/5 mx-auto mt-20  min-h-screen  flex flex-col  '>
      {
        loading?(<div  className=' min-h-screen flex justify-center items-center text-3xl'><Spinner/></div>):(blog.length<=0 ? <p>No Blog Found</p>:blog.map((post)=>{
          return  <div key={post.id} className='mt-5  max-w-[800px] min-w-[390px]'>
          <div className='bg-green-200  '>
          <p className='font-extrabold'>{post.author}</p>
            <p className='underline font-semibold'>{post.title}</p>
            <p className='text-green-300'>{post.category}</p>
            <p className='font-medium'>{post.content}</p>
          </div>
           <div className='flex justify-around font-bold text-xs lg:text-sm underline text-blue-400'>
           {post.tags.map((tag,index)=>(
              <p key={index}>{tag}</p>
            ))}
           </div>
            </div>
        }))
      }
    </div>
  )
}

export default Blog