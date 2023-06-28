import React,{useContext,useState} from 'react'
import BlogsContext from '../Context/blogcontext'

export default function BlogItem(props) {
    const {blogs}=props
    const context=useContext(BlogsContext)
    const {deleteBlog,editBlog}=context
    const [blogupdate,setblogupdate]=useState({})
    const [blog_id,setblog_id]=useState()
    const [Blog,setBlog]=useState({})

    function handleChange(){
        editBlog(blog_id,blogupdate.title,blogupdate.description,blogupdate.tag)

    }
  
    const onChange=(e)=>{  
        console.log(blogupdate)
        setblogupdate({...blogupdate,[e.target.name]:e.target.value})
        setBlog({blogupdate})
      }

  return (
   <>
       {/* Modal For updating the exsisting blog */}
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Blog</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3 my-4 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={Blog.title} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="description" name='description' value={Blog.description}  onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={Blog.tag}  onChange={onChange}/>
  </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"  onClick={handleChange}>Save changes</button>
      </div>
    </div>
  </div>
</div>

{/* Modal for Reading a blog */}
<div className="modal fade" id="MyreadModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Read Blog</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
  <div className="mb-3">
    <textarea type="text" className="form-control" id="description" name='description' disabled={true} value={Blog.description}/>
  </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

   {blogs?blogs.map((blog) => (
  <div className="card" style={{ width: "18rem", margin: "1rem", borderRadius: "2rem" }}>
    <div className="card-body">
      <h5 className="card-title" style={{ fontWeight: 'bold' }}>{blog.title}</h5>
      <p style={{ fontWeight: "lighter", color: "GrayText" }}>{blog.tag}</p>
      <p className="card-text">
        {blog.description && (blog.description.length < 70
          ? blog.description
          : blog.description.slice(0, 120) + '...')}
      </p>
      {blog.date && <p style={{ fontWeight: "lighter", color: "GrayText" }}>{blog.date.slice(0, 10)}</p>}

      <div className="d-flex">
        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setblog_id(blog._id); setBlog(blog) }}><i className="fas fa-edit"></i></button>
        <button type="button" className="btn" onClick={() => deleteBlog(blog._id)}><i className="fas fa-trash-alt"></i></button>
        <button type="button" className="btn" data-bs-toggle="modal" onClick={() => { setblog_id(blog._id); setBlog(blog) }} data-bs-target="#MyreadModal"><i className="fa fa-book"></i></button>
      </div>
    </div>
  </div>
)):""}
   </>
  )
}
