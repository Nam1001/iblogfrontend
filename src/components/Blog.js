import React,{useContext,useEffect} from 'react'
import BlogsContext from '../Context/blogcontext'
import BlogItem from './BlogItem'

export default function Blog(props) {
    const {blogs}=props
    const context=useContext(BlogsContext)
    const {fetchall}=context

    useEffect(()=>{
       fetchall()
    },[])
  return (
    <>
   <div className="my-3 row">
  <h4 className='my-4'>Your Blogs</h4>
  <BlogItem blogs={blogs}/>
</div>
    </>
  )
}
