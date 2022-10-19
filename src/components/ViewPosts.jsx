import React from 'react';
import Button from '../reusableComponents/Button';
import useFetch from '../custom_hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import "../styles/display.css"

const ViewPosts=()=>{
  const data=useFetch("posts")
  
  const navigate= useNavigate();


  return (
    <>
    
    <h2>Posts List</h2>
    
    <div className="navigate-btn-container">
    <Button className={"navigate-back-btn"} btnTxt={"Back"}  onClick={()=>navigate("/")}/>
    </div>
    <div>
        <table className="table table-bordered" >
      <thead>
        <tr>
          <th>Title</th>
          <th>Descreption</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post,index)=>
        <>
        <tr key={index}>
          <td>{post.title}</td>
          <td >{post.body}</td>
        </tr>
        </>
        )}
      </tbody>

    </table>
    </div>
    </>

  )
}

export default ViewPosts