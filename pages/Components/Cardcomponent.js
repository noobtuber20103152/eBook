import React, { useState } from 'react'
import Link from 'next/link'
function Cardcomponent(props) {
    const [SearchTerm, SetSearchTerm] = useState("Flowers for Algernon")
    return (
        <>
            <a href="#" class="flex my-3 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-800">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.imgLink} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <Link href={`/search/${props.SearchTerm}`}>
                        <a class="mb-2 text-2xl font-bold tracking-tight dark:text-white">{props.title}</a>
                    </Link>
                    <span class="bg-gray-800 text-white text-xs font-semibold mr-2  py-0.5 rounded  ">{props.author} . {props.publish}</span>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                </div>
            </a>
        </>
    )
}

export default Cardcomponent;