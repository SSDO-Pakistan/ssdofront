import React from 'react'

function Media() {
  return (
    <div className="container">
    <div className="card" style={{width: "18rem",backgroundColor:"#C84869" ,float:"left" ,color:"white"}}>
        <div className="card-body">
            <h5 className="card-title">Videos</h5>
        </div>
    </div>
    <div className="card" style={{width: "18rem", backgroundColor:"#C84869",color:"white"}}>
        <div className="card-body">
            <h5 className="card-title">Media Clippings</h5>
        </div>
    </div>
    </div>
  )
}

export default Media
