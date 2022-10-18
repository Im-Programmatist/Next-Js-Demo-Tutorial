//incremental static rendering
//Static serve generation

export default function serverSideRendered({state}){
    return(
        <>
            <p>Hello This is Static Serve Generation Rendering</p>
            {
                state.map((e)=>{
                    return <h2 key={e['id']}>{e['name']}</h2>
                })
            }
        </>
    );
}

export async function getStaticProps(){
    const res = await fetch("https://6339963c66857f698fb87fa2.mockapi.io/api/v1/Users");
    console.log(res.status);
    const state = (res.status==200) ? await res.json() : [];
    return {
        props:{
            state, //this will pass to page components by default,   
        },
        revalidate:100,//in second rebuild this component
    }
}