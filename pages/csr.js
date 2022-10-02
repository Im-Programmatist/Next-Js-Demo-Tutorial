//client side rendering

import {useState, useEffect} from 'react';

//to use dummy data used - mockapi.io portal
//https://mockapi.io/projects/6339963c66857f698fb87fa3

export default function clientSideRendered(){
    const [state, setState] = useState([]);
    async function getData(){
        const res = await fetch("https://6339963c66857f698fb87fa2.mockapi.io/api/v1/Users");
        console.log(res.status);
        const data = (res.status==200) ? await res.json() : [];
        setState(data);
        // res.then((result)=>{
        //     console.log("API data -", result.json());
        //     setData(result.json());
        // }).catch((e)=>{
        //     console.log(e);
        // })
    }

    useEffect(()=>{
        getData();
    },[]);

    return(
        <>
        {console.log(state)}
        <p>Hello This is client side rendering</p>
            {
                state.map((e)=>{
                    return <h2 key={e['id']}>{e['name']}</h2>
                })
            }

        </>
    )
}