import React from 'react'
import Link from "next/link";

function Media() {
    return (
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div className="card" style={{ width: "18rem", height: "20rem", backgroundColor: "#C84869" }}>
                    <div className="card-body">
                        <Link href={`media/media-clippings`}>
                            <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Videos</h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div className="card" style={{ width: "18rem", height: "20rem", backgroundColor: "#C84869"}}>
                    <div className="card-body">

                        <Link href={`media/media-clippinigs`}>
                            <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Media Clippings</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Media
