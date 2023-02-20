import React from 'react'
import Link from "next/link";

function Media() {
  return (
    <div className="container mt-5 mb-5">
    <div className="card" style={{width: "18rem", height:"20rem",backgroundColor:"#C84869" ,float:"left" }}>
        <div className="card-body">
        <Link href={`media/media-clippinigs`}> 
            <h5 className="card-title" style={{color:"white",fontWeight:"bolder"}}>Videos</h5>
        </Link> 
        </div>
      
    </div>
    <div className="card" style={{width: "18rem", height:"20rem", backgroundColor:"#C84869"}}>
        <div className="card-body">

          <Link href={`media/media-clippinigs`}> 
           <h5 className="card-title" style={{color:"white",fontWeight:"bolder"}}>Media Clippings</h5>
          </Link>
        </div>
    </div>
    </div>
  )
}

export default Media
