import { useState } from 'react';
function Former() {

    const [inp,setI]=useState(1);

    const [io,setT]=useState();

    const handleS=(event)=>
    {
        event.preventDefault();
        setT(inp);
    }

    const handleC=(event)=>{
        setI(event.target.value);
    }

    return (
        <form action="submit" onSubmit={handleS}>
            <input value={inp} type="text" onChange={handleC} />
            <button type="submit">Mety</button>
            <p>{io}</p>
        </form>
    );
}

export default Former;