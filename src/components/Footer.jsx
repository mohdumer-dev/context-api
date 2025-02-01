import React, { useContext } from 'react'
import { BlogContext } from '../context/blogcontext'

const Footer = () => {
  const { page, totalpage, changePage } = useContext(BlogContext)
  return (
    <div className=' w-full shadow-lg bg-slate-400 p-3 mt-6 flex justify-around items-center'>

      <div className='   flex gap-6  '>
        {page>1?<button className='px-5 py-1 rounded-md hover:bg-yellow-300 font-semibold bg-yellow-200 '  onClick={()=>{changePage(page-1)}}  >Previous  </button>:''}
        {page>=totalpage?'':<button className='px-5 py-1 rounded-md hover:bg-yellow-300 font-semibold bg-yellow-200 ' onClick={()=>{changePage(page+1)}}> Next </button>}
      </div>

      <div className=' text-black font-bold '>
        {page} of {totalpage}
      </div>


    </div>
  )
}

export default Footer