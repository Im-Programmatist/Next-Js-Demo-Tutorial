//server side rendering

export default function serverSideRendered({state}){
    return(
        <>
            <p>Hello This is Server Side Rendering</p>
            {
                state.map((e)=>{
                    return <h2 key={e['id']}>{e['name']}</h2>
                })
            }
        </>
    );
}

export async function getServerSideProps(){
    const res = await fetch("https://6339963c66857f698fb87fa2.mockapi.io/api/v1/Users");
    console.log(res.status);
    const state = (res.status==200) ? await res.json() : [];
    return {
        props:{
            state //this will pass to page components by default
        }
    }
}