import React,{useState} from 'react'
import BlogsContext from './blogcontext'

const BlogState=(props)=>{
    const host="http://localhost:5000"
    const [blogs, setblogs] = useState([{}])
    const fetchall=async()=>{
        const response=await fetch(`${host}/api/blog/fetchall`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify()
          });
          const json=await response.json()
          setblogs(json)

    }

    const createblog=async(blog)=>{
        const response=await fetch(`${host}/api/blog/createblog`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({title:blog.title, description:blog.description,tag:blog.tag})
          });
          const json=await response.json()
          if(json.errors){
            alert("Min 3 Characters required to all Fields")
          }
          const AddBlog= {
            "title": json.title,
            "description": json.description,
            "tag": json.tag,
            "date":new Date().toISOString(),
            "__v": 0
          }

          setblogs([...blogs,AddBlog])
          alert('Successfully created a blog')

    }
    const deleteBlog=async(id)=>{
        const response = await fetch(`${host}/api/blogs/deleteblogs/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify()
          });
          console.log(response.json())
        const newBlog=blogs.filter((blog)=>{return blog._id!==id})
        console.log("delete the note of id"+id)
        setblogs(newBlog)
        
     }
     
     const editBlog = async (id,  title, description, tag ) => {
        console.log(title,description,tag,"items")
          const response = await fetch(`${host}/api/blog/updateblog/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"        
            },
            body: JSON.stringify({ title, description, tag })
          });
          const json = await response.json();
          if(!title){
            title=json.title
          }
          if(!tag){
            tag=json.tag
          }
          if(!description){
            description=json.description
          }
          // Update the blog state with the new values
          const updatedBlog = blogs.map((blog) => {
            if (blog._id === id) {
              console.log(title)
              return { ...blog, title, description, tag};
            }
            return blog;
          });
                  setblogs(updatedBlog);
        };

    return(
        <BlogsContext.Provider value={{blogs ,fetchall,createblog,editBlog,deleteBlog}} >
            {props.children}
        </BlogsContext.Provider>
    )

}

export default BlogState