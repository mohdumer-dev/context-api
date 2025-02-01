import { createContext, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [loading, setloading] = useState(false)
  const [blog, setBlog] = useState([])
  const [page, setpage] = useState(1)
  const [totalpage, setTotalpage] = useState(null)


  async function FetchData(page=1) {
    setloading(true)
    const url = import.meta.env.VITE_BACK_URL
    try {
      const response = await axios.get(`${url}?page=${page}`)
      const data = response.data
      setBlog(data.posts)
      setpage(data.page)
      setTotalpage(data.totalPages)
      console.log("data found by context")
      console.log(blog)
    } catch (err) {
      console.log({ Server: "Down" })
      setBlog([])
      setpage(1)
      setTotalpage(null)
      setloading(false)

    }


  }
  function changePage(page){
    setpage(page)
    FetchData(page)

  }

 


  const value = {
    loading,
    setloading,
    blog,
    setBlog,
    page,
    setpage,
    totalpage,
    setTotalpage,
    FetchData,
    changePage

  }

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
