import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from "next/head"
function Front() {
    const router = useRouter();
    const [search, setsearch] = useState("");
    const onChange = (e) => {
        if (e.target.name === 'text') {
            setsearch(e.target.value);
        }
    }
    const handleSubmit = () => {
        const data = { search };
        console.log(data);
        fetch("http://localhost:3000/api/search", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(fetchdata => {
            console.log(fetchdata);
            router.push(`/books/${search}`)
        }).catch((err)=>{
            console.log(err)
        })

    }
    return (
        <>
            <Head>
                <title>Welcome to eBooks</title>
            </Head>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="ebook.png" />
                    <div class="flex flex-col text-center w-full">
                        <div>
                            <input onChange={onChange} value={search} type="email" id="email" name="text" class="w-full mb-2 md:w-3/6 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button onClick={handleSubmit}>
                                <a class="inline-flex items-center mx-3 bg-blue-700 border-0 py-1 px-3 focus:outline-none text-white hover:bg-blue-800 rounded text-base mt-4 md:mt-0" >search</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Front