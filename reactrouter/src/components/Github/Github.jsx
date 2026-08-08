import React, {useState, useEffect} from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kaushalvivek2005')
    //     .then(Response => Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // }, [])

    return(
        <div className="text-center m-4 bg-gray-600 text-white">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" />
            </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/kaushalvivek2005')
    return Response.json()
}