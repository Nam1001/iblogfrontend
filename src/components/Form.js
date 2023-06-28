import React, { useContext, useState } from 'react'
import BlogsContext from '../Context/blogcontext'
import Blog from "./Blog"
export default function Form() {
    const context=useContext(BlogsContext)
    const {blogs,createblog}=context
    const[blog,setBlog]=useState({title:"",description:"",tag:""})

   const onChange=(e)=>{
    setBlog({...blog,[e.target.name]: e.target.value})
   }
    function handleclick(){
       createblog(blog)
       setBlog({title:"",description:"",tag:""})
    }
  return (
   <>
   <form className='container'>
  <div className="mb-3 my-4 ">
    <h3>Write a Blog </h3>
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" required onChange={onChange} value={blog.title} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="description" name='description' required onChange={onChange} value={blog.description} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' required onChange={onChange} value={blog.tag} />
  </div>
  <button type='button' className="btn btn-primary" onClick={handleclick} >Submit</button>
</form>
<Blog blogs={blogs}/>
   </>
  )
}
