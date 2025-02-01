import React from 'react'
import { BlogProvider } from './context/blogcontext'
import Data from './components/Data'

const App = () => {
  return (
   <BlogProvider>
    <Data/>
   </BlogProvider>
  )
}

export default App