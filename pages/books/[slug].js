import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Head from "next/head"
import Cardcomponent from '../Components/Cardcomponent';
function slug(props) {
    const [data, setdata] = useState(props.post['items']);
    // console.log(data['items'])
    // data.map((e) => {
    //     // console.log(e['volumeInfo'].title)
    //     // console.log(typeof(e['volumeInfo'].description))
    //     if (e['volumeInfo'].description != null) {
    //         // console.log(e['volumeInfo'].description.length)
    //         // let x = e['volumeInfo'].imageLinks;
    //         console.log(e.tag)
    //         // if (x != undefined) {
    //         //     console.log(x.thumbnail)
    //         // }
    //     }
    // })
    const router = useRouter();
    const { slug } = router.query;
    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div className='mx-2' >
                {data.map((e) => {
                    if (e['volumeInfo'].description != null && e['volumeInfo'].imageLinks != undefined && e['volumeInfo'].authors != undefined) {
                        return <Cardcomponent SearchTerm={slug + ':' + e.id} imgLink={e['volumeInfo'].imageLinks.thumbnail} desc={e['volumeInfo'].description.slice(0, 200) + '...'} author={e['volumeInfo'].authors[0]} title={e['volumeInfo'].title} />
                    }
                })}
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    console.log(slug)
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${slug}&key=AIzaSyA_LImZiq7Lf4TbyU3wWlFcufBPYPqykTU`)
    const post = await res.json()
    return { props: { post } }
}

export default slug; 
