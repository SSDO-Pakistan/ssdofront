import React from 'react'

function Media(data) {
    return (
        <div className='container'>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Videos</h5>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Media Clippings</h5>
                </div>
            </div>
        </div>
    )
}
export default Media
export async function getStaticProps() {
    const res = await
        fetch('https://strapi-production-9f68.up.railway.app/api/media')

    const data = await res.json()


    return {
        props: {
            data,

        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}
