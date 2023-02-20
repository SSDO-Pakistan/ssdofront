import React from 'react'
import Link from "next/link";
function Whatwedo() {
  return (
    <div className='container'>
          <div className="block-title-6 mt-5 text-center">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">What we do</span>
        </h4>
      </div>
    <div class="row mt-5 mb-5" style={{justifyContent:"center"}}>

        {/* first */}
        <div class="col-sm-4 mb-3 mb-sm-0  ">
            <div className="card  d-flex align-items-center rgba-black-strong py-5 px-4" style={{ width: "22rem", height: "18rem", backgroundColor: "#F2BF5E",justifyContent:"center" }}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Research <span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
         {/* second */}
        <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{  width: "22rem", height: "18rem", backgroundColor: "#FF6161" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Advocacy (Community & Policy) <span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
         {/* third */}
         <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{  width: "22rem", height: "18rem", backgroundColor: "#213E8C" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Behavioral Change Communication<span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
         {/* fourth */}
         <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{  width: "22rem", height: "18rem", backgroundColor: "#35C68B" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Capcity Building & Institutional Strengthening <span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
         {/* fifth */}
         <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{  width: "22rem", height: "18rem", backgroundColor: "#F2BF5E" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Community Mobilization<span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
           {/* sixth */}
           <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{ width: "22rem", height: "18rem", backgroundColor: "#FF6161" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Patnership & Networking with Govt.Institutions <span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
           {/* seventh */}
           <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{  width: "22rem", height: "18rem", backgroundColor: "#C84869" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Engagement with Public Officials & Duty Bearers <span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
           {/* eight */}
           <div class="col-sm-4 mb-3">
            <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{  width: "22rem", height: "18rem", backgroundColor: "#3A57A6" , justifyContent:"center"}}>
                <div className="card-body">
                    <Link href={`#`}>
                        <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Monitoring & Evalution<span>&#8594;</span></h5>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Whatwedo