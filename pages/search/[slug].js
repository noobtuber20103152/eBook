import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import SearchComponent from '../Components/SearchComponent';
function slug(props) {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setdata] = useState(props.post['items']);
    console.log(slug)
    console.log(slug.split(':')[1])
    const [title, settitle] = useState('');
    // data.map((e) => {
    //     if (e.id === slug.split(':')[1]) {
    //         return settitle(e['volumeInfo'].title)

    //     }
    // })
    return (
        <>

            {data.map((e) => {
                if (e['volumeInfo'].description != null && e['volumeInfo'].imageLinks != undefined && e.id === slug.split(':')[1] && e['saleInfo'].retailPrice != undefined && e['saleInfo'].retailPrice.amount != undefined) {
                    return <>
                        <Head>
                            <title>{e['volumeInfo'].title}</title>
                        </Head>
                    </>
                }
            })}

            {data.map((e) => {
                if (e['volumeInfo'].description != null && e['volumeInfo'].imageLinks != undefined && e.id === slug.split(':')[1] && e['saleInfo'].retailPrice != undefined && e['saleInfo'].retailPrice.amount != undefined) {
                    return <SearchComponent bookLink={e['volumeInfo'].infoLink} price={e['saleInfo'].retailPrice.amount} imgLink={e['volumeInfo'].imageLinks.thumbnail}
                        publisher={e['volumeInfo'].publisher} publishdate={e['volumeInfo'].publishedDate} totalpage={e['volumeInfo'].pageCount} desc={e['volumeInfo'].description} author={e['volumeInfo'].authors[0]} title={e['volumeInfo'].title} />
                }
            })}
        </>
    )
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    console.log(slug)
    let x = slug.split(':');
    console.log(x[0]);
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${x[0]}&key=AIzaSyA_LImZiq7Lf4TbyU3wWlFcufBPYPqykTU`)
    const post = await res.json()
    return { props: { post } }
}
export default slug;